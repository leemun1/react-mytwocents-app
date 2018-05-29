import React from 'react';

import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withPermission from './withPermission';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="Section">
        <h1>Logged in as: {authUser.email}</h1>
        <p className="Section__description">Need to change your password?</p>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const permission = (authUser) => !!authUser;

export default withPermission(permission)(AccountPage);