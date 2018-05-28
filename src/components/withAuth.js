import React from 'react';

import AuthUserContext from './AuthUserContext';
import {firebase} from '../firebase';

const withAuth = (Component) => {
  class ComponentWithAuth extends React.Component {
    state = {
      authUser: null
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null })
        authUser && console.log(authUser);
      })
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  return ComponentWithAuth
}

export default withAuth;