import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth user={authUser} />
      : <NavigationNotAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = ({ user }) =>
  <div className="Navigation">
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><SignOutButton /></li>
    </ul>
  </div>

const NavigationNotAuth = () =>
  <div className="Navigation">
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li>Hello, Anonymous</li>
    </ul>
  </div>

export default Navigation;