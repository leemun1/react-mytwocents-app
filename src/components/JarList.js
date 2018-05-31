import React from 'react';

import JarListItem from './JarListItem';

const JarList = ({ jars, children }) =>
  <div className="JarList__container">
    <div className="JarList__header">
      <h2 className="JarList__header__title">{children}</h2>
      <div className="JarList__header__controls">
        <span className="JarList__header__filter">Latest</span>
        <span className="JarList__header__filter">Popular</span>
      </div>
    </div>
    <div>
      {Object.keys(jars).map(key => 
        <JarListItem key={key} id={key} jar={jars[key]} />
      )}
    </div>
  </div>

export default JarList;