import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    {authUser
      ? <NavigationAuth user={authUser} />
      : <NavigationNotAuth />
    }
  </div>

const NavigationAuth = () =>
  <div className="Navigation">
    <Link className="Navigation__item Navigation__item--brand" to={routes.LANDING}>
      <i className="fas fa-quote-left"></i> myTwoCents
    </Link>
    <Link className="Navigation__item" to={routes.ABOUT}>
      <div>About</div>
    </Link>
    <Link className="Navigation__item" to={routes.BROWSE}>
      <div>Browse</div>
    </Link>
    <Link 
      className="Navigation__item Navigation__item--account" 
      to={routes.ACCOUNT}
    >
      <div>Account</div>
    </Link>
    <div className="Navigation__item"><SignOutButton /></div>
  </div>

const NavigationNotAuth = () =>
  <div className="Navigation">
    <Link className="Navigation__item Navigation__item--brand" to={routes.LANDING}>
      <i className="fas fa-quote-left"></i> myTwoCents
    </Link>
    <Link className="Navigation__item" to={routes.ABOUT}>
      <div>About</div>
    </Link>
    <Link className="Navigation__item" to={routes.BROWSE}>
      <div>Browse</div>
    </Link>
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

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);