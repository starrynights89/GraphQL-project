import React, { Component } from 'react';
import SearchBar from './search';

export default class Bar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="inner">
          <SearchBar />
        </div>
      </div>
    );
  }
}