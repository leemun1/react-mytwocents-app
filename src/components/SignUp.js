import React, { Component } from 'react';
import { 
  withRouter,
  Link,
 } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div className="Section">
    <h1>Join The Crew!</h1>
    <SignUpForm history={history}/>
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  onSubmit = (e) => {
    const {
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({...INITIAL_STATE});
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  }

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input
          className="Form__input"
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Username"
        />
        <input
          className="Form__input"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Form__input"      
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          className="Form__input"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="Button Button--signup" disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p className="Form__error">{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () =>
  <p className="Form__link">
    Don't have an account yet?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink
};