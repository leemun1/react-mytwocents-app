import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../firebase';
import * as routes from '../constants/routes';

const PasswordForgetPage = () =>
  <div>
    <h1>PasswordForgetPage</h1>
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
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={e => this.setState({ 'email': e.target.value })}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
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
