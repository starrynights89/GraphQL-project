/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PostsFeedQuery from './components/queries/postsFeed';
import FeedList from './components/post/feedlist';

import gql from 'graphql-tag';
import { Query, Mutation } from "react-apollo";
import InfiniteScroll from 'react-infinite-scroller';

export default class Feed extends Component {
  render() {
    const query_variables = { page: 0, limit: 10 };

    return (
      <PostsFeedQuery>
        <FeedList />
      </PostsFeedQuery>
    );
  }
}
