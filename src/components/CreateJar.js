import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import { db } from '../firebase';
import withPermission from './withPermission';
import * as routes from '../constants/routes';

const INITIAL_STATE = {
  title: '',
  content: '',
  createdAt: '',
  likes: 0,
  error: null,
};

class CreateJarForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  onSubmit = (e) => {
    const { title, content, likes } = this.state;
    const createdAt = moment().valueOf();
    const { user, history } = this.props;

    db.doCreateJar(user.uid, title, content, createdAt, likes)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      })
    e.preventDefault();
  }

  render() {
    const { title, content, error } = this.state;
    const isInvalid = title === '' || content === '';

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input
          className="Form__input"
          value={title}
          onChange={e => this.setState({ 'title': e.target.value })}
          type="text"
          placeholder="Title"
        />

        <textarea
          className="Form__input"
          value={content}
          onChange={e => this.setState({ 'content': e.target.value })}
          placeholder="Write something..."
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

const CreateJarPage = ({ authUser, history }) =>
  <div className="FormPage">
    <h1 className="FormPage__heading">Create a New Jar</h1>
    <CreateJarForm user={authUser} history={history}/>
  </div>

const permission = (authUser) => !!authUser;

export {
  CreateJarForm
};

export default compose(
  withPermission(permission),
  withRouter,
  connect(mapStateToProps)
)(CreateJarPage);