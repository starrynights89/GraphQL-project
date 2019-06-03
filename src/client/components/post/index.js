/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PostHeader from './header';
import PostContent from './content';

export default class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className={'post ' + (post.id < 0 ? 'optimstic' : '')}>
        <PostHeader post={post} />
        <PostContent post={post} />
      </div>
    );
  }
}
