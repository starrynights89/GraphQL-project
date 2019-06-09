import React, { Component } from 'react';

export default class PostForm extends Component {
  handlePostContentChange = (event) => {
    this.props.changePostContent(event.target.value);
  }
  render() {
    const self = this;
    const { addPost, postContent } = this.props;

    return (
      <div className="postForm">
        <form onSubmit={e => {
          e.preventDefault();
          addPost({ variables: { post: { text: postContent } } 
            }).then(() => {
              self.props.changePostContent('');
            });
        }}>
          <textarea value={postContent} onChange = 
            {self.handlePostContentChange} placeholder="Write your
              custom post!" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}