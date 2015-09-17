import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Comments from '../components/Comments';

class App extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div>
        <Comments comments={comments} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: [
      {id: 1, text: 'first comment'},
      {id: 2, text: 'second comment'}
    ] //state.comments
  };
}

export default connect(mapStateToProps)(App);