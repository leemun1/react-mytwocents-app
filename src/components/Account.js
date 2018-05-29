import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="Section">
        <h1>Logged in as: {authUser.email}</h1>
        <PasswordForgetForm/>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

export default AccountPage;