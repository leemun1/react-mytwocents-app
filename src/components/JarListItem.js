import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const JarListItem = ({ jar }) =>
  <Link to={routes.LANDING}>
    <div className="JarList__item">
      <div className="JarList__item--title">{jar.title}</div>
      <div className="JarList__item--username">@Username</div>
      <div className="JarList__item--meta">
        <span>23 minutes ago</span>
        <span>{`\u2022`}</span>
        <span>23 likes</span>
        <span>{`\u2022`}</span>
        <span>13 comments</span>      
      </div>
    </div>
  </Link>

export default JarListItem;