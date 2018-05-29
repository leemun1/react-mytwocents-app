import React, { Component } from 'react';

import withPermission from './withPermission';
import { db } from '../firebase';

class HomePage extends Component {
  state = {
    users: null,
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState({ users: snapshot.val() })
    )
  }

  render() {

    const {users} = this.state;
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


const permission = (authUser) => !!authUser;

export default withPermission(permission)(HomePage);