import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../firebase';
import * as routes from '../constants/routes';

const PasswordForgetPage = () =>
  <div className="Section">
    <h1>Forgot your password?</h1>
    <p className="Section__description">Don't worry!<br/>Just enter the email you used to sign up below, and we will send you a link to reset your password.</p>
    <PasswordForgetForm />
  </div>

const INITIAL_STATE = {
  email: '',
  error: null,
}

class PasswordForgetForm extends Component {
  state = {
    ...INITIAL_STATE,
  }

  onSubmit = (e) => {
    const {email} = this.state;
    auth.doPasswordReset(email)
      .then(() => {
        this.setState({...INITIAL_STATE});
      })
      .catch(error => {
        this.setState({ error });
      })

    e.preventDefault();
  }

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input
          className="Form__input"
          value={email}
          onChange={e => this.setState({ 'email': e.target.value })}
          type="text"
          placeholder="Email Address"
        />
        {error && <p className="Form__error">{error.message}</p>}
        <button className="Button Button--passwordReset" disabled={isInvalid} type="submit">
          Reset My Password
        </button>
      </form>
    )
  }
}

const PasswordForgetLink = () =>
  <p className="Form__link">
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
