import React from 'react';

import {auth} from '../firebase';

const SignOutButton = () =>
  <button
    className="Navigation__item Navigation__item--action--signout"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;