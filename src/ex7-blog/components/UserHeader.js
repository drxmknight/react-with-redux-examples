import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  // Render the component.
  render() {
    const { user } = this.props;
    if (!user) return null;

    return <div className="header">{user.name}</div>;
  }
}

// ownProps hold a copy of the props that will be sent to the component.
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
