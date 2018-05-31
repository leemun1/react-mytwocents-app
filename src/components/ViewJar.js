import React from 'react';
import moment from 'moment';

import { db } from '../firebase';

class ViewJarPage extends React.Component {
  state = {
    title: '',
    likes: 0,
    createdAt: '',
    content: '',
    uid: '',
    username: '',
  }

  componentDidMount() {
    const jarId = this.props.match.params.id;
    db.onceGetJarById(jarId).then(snapshot => {
      this.setState(snapshot.val())

      db.onceGetUsernameById(snapshot.val().uid).then(snapshot =>
        this.setState({ username: snapshot.val() })
      )
    });
  }

  render() {
    const { title, likes, createdAt, content, username } = this.state;
    return (
      <div className="Content">
        <div className="JarView">
          <div className="JarView__infoSlot">
            <div className="JarView__meta">
              <img className="JarView__meta--avatar" src="/images/avatars/elyse.png" />
              <div className="JarView__meta--username">{username}</div>
              <div className="JarView__meta--createdAt">
                {moment(createdAt).format('MMM DD, YYYY')}
              </div>
            </div>
            <div className="JarView__metric">
              <div className="JarView__metric--likes">
                <span><i class="far fa-heart"></i></span> {likes}
              </div>
              <div className="JarView__metric--likes">
                <span><i class="far fa-comment"></i></span> 3
              </div>
            </div>
          
          </div>
          <div className="JarView__title">
            <span>{title}</span>
          </div>
          <div className="JarView__content">{content}</div>
        </div>
      </div>
    )
  }
}

export default ViewJarPage; 