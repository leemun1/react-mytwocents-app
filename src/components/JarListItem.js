import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import * as routes from '../constants/routes';
import { db } from '../firebase';

class JarListItem extends Component {
  state = {
    username: '',
  }

  componentDidMount() {
    db.onceGetUsernameById(this.props.jar.uid).then(snapshot =>
      this.setState({ username: snapshot.val() })
    );
  }

  render() {
    const {username} = this.state;
    const { title, likes, createdAt } = this.props.jar;
    const timeFromNow = moment(createdAt).fromNow();

    return (
      <Link to={routes.LANDING}>
        <div className="JarList__item">
          <div className="JarList__item--title">{title}</div>
          <div className="JarList__item--username">@{username}</div>
          <div className="JarList__item--meta">
            <span>{timeFromNow}</span>
            <span>{`\u2022`}</span>
            <span>{likes} likes</span>
          </div>
        </div>
      </Link>
    )
  }
}

export default JarListItem;