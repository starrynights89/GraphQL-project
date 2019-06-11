/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import Chats from './Chats';
import '../../assets/css/style.css';
import './components/fontawesome';
import Bar from './components/bar';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphbook" />
        </Helmet>
        <Bar />
        <Feed />
        <Chats />
      </div>
    );
  }
}
