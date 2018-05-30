import React, { Component } from 'react';
import { connect } from 'react-redux';

import GreetingBox from './Greeting';
import JarList from './JarList';
import { db } from '../firebase';

class LandingPage extends Component {
  componentDidMount() {
    const { onSetJars } = this.props;

    db.onceGetJars().then(snapshot =>
      onSetJars(snapshot.val())
    )
  }

  render() {
    const { authUser, jars } = this.props;
    console.log(jars);
    return (
      <div className="Content">
        <GreetingBox authUser={authUser} />
        {jars && <JarList jars={jars} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  jars: state.jarState.jars,
});

const mapDispatchToProps = (dispatch) => ({
  onSetJars: (jars) => dispatch({ type: 'JARS_SET', jars }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);