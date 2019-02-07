import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  // Fetch the data when the component renders.
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  // Render every element in the posts list.
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}></UserHeader>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// Map redux state to component props.
const mapStateToProps = state => {
  return { posts: state.posts };
};

// Connect the component to redux with this action creators.
export default connect(
  mapStateToProps,
  { fetchPostAndUsers }
)(PostList);
