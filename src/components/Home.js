import React from 'react';

import withPermission from './withPermission';

const HomePage = () =>
  <div className="Main">
    <h1>HomePage</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>

const permission = (authUser) => !!authUser;

export default withPermission(permission)(HomePage);