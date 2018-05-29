import React from 'react';
import {withRouter} from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import {firebase} from '../firebase';
import * as routes from '../constants/routes';

const withPermission = (permission) => (Component) => {
  class ComponentWithPermission extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!permission(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component /> : null}
        </AuthUserContext.Consumer>
      )
    }
  }

  return withRouter(ComponentWithPermission);
}

export default withPermission;