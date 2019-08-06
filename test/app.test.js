import 'regenerator-runtime';
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';
//import { configure, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//import register from 'ignore-styles';
import App from '../src/server/ssr';

const assert = require('assert');
const request = require('request');
const { expect } = require('chai');
const should = require('chai').should();
require('babel-plugin-require-context-hook/register')();

//configure({ adapter: new Adapter() });

//register(['.css', '.sass', '.scss']);
//require('isomorphic-fetch');
//const { JSDOM } = require('jsdom');

//const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://graphsite.test' });
//const { window } = dom;
//global.window = window;
//global.document = window.document;

describe('Graphbook application test', () => {
  //var authToken;

  /*
  before((done) => {
    app = require('../src/server').default;
    app.on('listening', () => {
      done();
    });
  });

  after((done) => {
    app.close(done);
  });
  */

  it('renders and serves the index page', (done) => {
    request('http://localhost:8000', (err, res, body) => {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).to.be.equal(200);
      assert.ok(body.indexOf('<html></html>') !== -1);
      done(err);
    });
  }).timeout(50000);
});
