import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as routes from '../constants/routes';

const GreetingBox = ({ authUser }) =>
  <div>
    {authUser
      ? <GreetingAuth user={authUser} />
      : <GreetingNotAuth />
    }
  </div>

const GreetingAuth = ({ user }) =>
  <div className="Content__greeting">
    <h1 className="Content__greeting__message">Welcome Back!</h1>
    <Link to={routes.CREATE_JAR}>
      <button className="Button Button--newjar">
        Open a New Jar
      </button>
    </Link>
  </div>

const GreetingNotAuth = () =>
  <div className="Content__greeting">
    <h1 className="Content__greeting__message">Hello, Anonymous</h1>
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(GreetingBox);