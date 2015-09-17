import React, { Component, PropTypes } from 'react';
import Comment from './Comment';

class Comments extends Component {
  render() {
    console.log(this.props.comments)
    return (
      <ul>
        {this.props.comments.map(comment =>
          <li>
            <Comment key={comment.id} {...comment} />
          </li>
        )}
      </ul>
    );
  }
}

export default Comments;
