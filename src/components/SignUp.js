import React, { Component } from 'react';
import { 
  withRouter,
  Link,
 } from 'react-router-dom';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div className="Section">
    <h1 className="Section__title">Join The Crew!</h1>
    <SignUpForm history={history}/>
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  onSubmit = (e) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log('authUser', authUser);
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            console.log('added user to db');
            this.setState({...INITIAL_STATE});
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });

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
          onChange={e => this.setState({'username': e.target.value})}
          type="text"
          placeholder="Username"
        />
        <input
          className="Form__input"
          value={email}
          onChange={e => this.setState({'email': e.target.value})}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="Form__input"      
          value={passwordOne}
          onChange={e => this.setState({'passwordOne': e.target.value})}
          type="password"
          placeholder="Password"
        />
        <input
          className="Form__input"
          value={passwordTwo}
          onChange={e => this.setState({'passwordTwo': e.target.value})}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="Button" disabled={isInvalid} type="submit">
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