/* eslint-disable react/prefer-stateless-function */
import 'core-js';
import 'regenerator-runtime';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapater from 'enzyme-adapter-react-16';
import register from 'ignore-styles';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';
import App from '../src/server/ssr';

register(['.css', '.sass', 'scss']);
configure({ adapater: new Adapater() });

const assert = require('assert');
const request = require('request');
const { expect } = require('chai');
const should = require('chai').should();
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://graphsite.test' });
const { window } = dom;
global.window = window;
global.document = window.document;

require('babel-plugin-require-context-hook/register')();
require('isomorphic-fetch');

describe('Graphbook application test', () => {
  var app;
  var authToken;

  before((done) => {
    app = require('../src/server').default;
    app.on('listening', () => {
      done();
    });
  });

  after((done) => {
    app.close(done);
  });

  it('renders and serves the index page', (done) => {
    request('http://localhost:8000', (err, res, body) => {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).to.be.equal(200);
      assert.ok(body.indexOf('<html') !== -1);
      done(err);
    });
  });

  describe('404', () => {
    it('redirects the user when not matching path is found', (done) => {
      request({
        url: 'http://localhost:8000/',
      }, (err, res, body) => {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).to.be.equal(200);
        assert.ok(res.req.path === '/');
        assert.ok(body.indexOf('<html') !== -1);
        assert.ok(body.indexOf('class="authModal"') !== -1);
        done(err);
      });
    });
  });

  describe('authentication', () => {
    it('redirects the user when not logged in', (done) => {
      request({
        url: 'http://localhost:8000/app',
      }, (err, res, body) => {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).to.be.equal(200);
        assert.ok(res.req.path === '/');
        assert.ok(body.indexOf('<html') !== -1);
        assert.ok(body.indexOf('class="authModal"') !== -1);
        done(err);
      });
    });

    it('allows the user to sign up', (done) => {
      const json = {
        operationName: null,
        query: 'mutation signup($username: String!, $email : String!, $password : String!) { signup(username: $username, email: $email, password : $password) { token }}',
        variables: {
          email: 'mocha@test.com',
          username: 'mochatest',
          password: '123456789',
        },
      };

      request.post({
        url: 'http://localhost:8000/graphql',
        json,
      }, (err, res, body) => {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).to.be.equal(200);
        body.should.be.an('object');
        body.should.have.property('data');
        authToken = body.data.signup.token;
        done(err);
      });
    });

    it('allows the user to query all chats', (done) => {
      const json = {
        operationName: null,
        query: 'query {chats {id users {id avatar username}}}',
        variables: {},
      };

      request.post({
        url: 'http://localhost:8000/graphql',
        headers: {
          Authorization: authToken,
        },
        json,
      }, (err, res, body) => {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).to.be.equal(200);
        body.should.be.an('object');
        body.should.have.property('data');
        body.data.should.have.property('chats').with.lengthOf(0);
        done(err);
      });
    });
  });

  describe('frontend', () => {
    it('renders and switched to the login or register form', (done) => {
      const httpLink = createUploadLink({
        uri: 'http://localhost:8000/graphql',
        credentials: 'same-origin',
      });
      const client = new ApolloClient({
        link: ApolloLink.from([
          httpLink,
        ]),
        cache: new InMemoryCache(),
      });

      class Graphsite extends React.Component {
        render() {
          return (
            <App client={client} context={{}} loggedIn={false} location="/" />
          );
        }
      }

      const wrapper = mount(<Graphsite />);

      expect(wrapper.html()).to.contain('<a>Want to signup? Click here</a>');
      wrapper.find('LoginRegisterForm').find('a').simulate('click');
      expect(wrapper.html()).to.contain('<a>Want to login? Click here</a>');
      done();
    });
  });
});
