import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div className="Section">
    <h1 className="Section__title">Welcome Back!</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input
          className="Form__input"
          value={email}
          onChange={e => this.setState({ 'email': e.target.value })}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Form__input"
          value={password}
          onChange={e => this.setState({ 'password': e.target.value })}
          type="password"
          placeholder="Password"
        />
        {error && <p className="Form__error">{error.message}</p>}
        <button className="Button" disabled={isInvalid} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm
};