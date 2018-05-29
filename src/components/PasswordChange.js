import React, {Component} from 'react';

import { auth } from '../firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  onSubmit = (e) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      })
    e.preventDefault();
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input
          className="Form__input"
          value={passwordOne}
          onChange={e => this.setState({ 'passwordOne': e.target.value })}
          type="password"
          placeholder="New Password"
        />
        <input
          className="Form__input"
          value={passwordTwo}
          onChange={e => this.setState({ 'passwordTwo': e.target.value })}
          type="password"
          placeholder="Confirm New Password"
        />
        {error && <p className="Form__error">{error.message}</p>}
        <button className="Button Button--passwordChange" disabled={isInvalid} type="submit">
          Change My Password
        </button>
      </form>
    )
  }
}

export default PasswordChangeForm;