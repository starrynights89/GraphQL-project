/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import Chats from './Chats';
import '../../assets/css/style.css';

// Class app extend React Component
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Grahsite - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphsite" />
        </Helmet>
        <Feed />
        <Chats />
      </div>
    );
  }
}
