import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import withAuth from './withAuth';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AboutPage from './About';
import AccountPage from './Account';
import NotFoundPage from './NotFound';

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div className="App">
      <Navigation />
        <Switch>
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route path={routes.SIGN_UP} component={SignUpPage} />
          <Route path={routes.SIGN_IN} component={SignInPage} />
          <Route path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={routes.HOME} component={HomePage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.ACCOUNT} component={AccountPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </Router>

export default withAuth(App);
