import React, { Component, PropTypes } from 'react';

class Comment extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

export default Comment;
