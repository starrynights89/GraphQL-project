/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="error message">
        {children}
      </div>
    );
  }
}