import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import PasswordChangeForm from './PasswordChange';
import withPermission from './withPermission';

const AccountPage = ({ authUser }) =>
  <div className="Section">
    <h1>Logged in as: {authUser.email}</h1>
    <p className="Section__description">Need to change your password?</p>
    <PasswordChangeForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const permission = (authUser) => !!authUser;

export default compose(
  withPermission(permission),
  connect(mapStateToProps)
)(AccountPage);