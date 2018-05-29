import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withPermission from './withPermission';
import { db } from '../firebase';

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    )
  }

  render() {

    const { users } = this.props;

    console.log(users);
    return (
      <div className="Main">
        <h1>HomePage</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { users && <UserList users={users} /> }
      </div>
    )
  }
}

const UserList = ({users}) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign UP in Firebase DB)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const permission = (authUser) => !!authUser;

export default compose(
  withPermission(permission),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
