import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { db } from '../firebase';
import withPermission from './withPermission';

const INITIAL_STATE = {
  title: '',
  error: null,
};

const CreateJarPage = () =>
  <div>
    <CreateJarForm />
  </div>

class CreateJarForm extends Component {
  state = {
    ...INITIAL_STATE
  };
  
  onSubmit = (e) => {
    const { title } = this.state;
    const user = this.props.user;

    db.doCreateJar(user.uid, title)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      })
    e.preventDefault();
  }

  render() {
    const { title, error } = this.state;
    const isInvalid = title === '';

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input
          className="Form__input"
          value={title}
          onChange={e => this.setState({ 'title': e.target.value })}
          type="text"
          placeholder="Title"
        />
        {error && <p className="Form__error">{error.message}</p>}
        <button className="Button" disabled={isInvalid} type="submit">
          Create New Jar
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const permission = (authUser) => !!authUser;

export {
  CreateJarForm
}

export default compose(
  withPermission(permission),
  connect(mapStateToProps)
)(CreateJarPage);