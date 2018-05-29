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
    <Link className="Navigation__item Navigation__item--brand" to={routes.LANDING}>
      <i className="fas fa-quote-left"></i> myTwoCents
    </Link>
    <Link className="Navigation__item" to={routes.HOME}>
      <div>Home</div>
    </Link>
    <Link className="Navigation__item" to={routes.ACCOUNT}>
      <div>Account</div>
    </Link>
    <div className="Navigation__item"><SignOutButton /></div>
  </div>

const NavigationNotAuth = () =>
  <div className="Navigation">
    <Link className="Navigation__item Navigation__item--brand" to={routes.LANDING}>
      <i className="fas fa-quote-left"></i> myTwoCents
    </Link>
    <div className="Navigation__item">Hello, Anonymous.</div>
    <Link 
      className="Navigation__item Navigation__item--action--signin" 
      to={routes.SIGN_IN}
    >
      Sign In
    </Link>
    <Link 
      className="Navigation__item Navigation__item--action--signup" 
      to={routes.SIGN_UP}
    >
      Sign Up
    </Link>
  </div>

export default Navigation;