import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ history }) =>
  <div className="Section">
    <h1 className="NotFound__title">404</h1>
    <p className="NotFound__url">{window.location.href}</p>
    <p className="NotFound__description">
      The page you requested does not exist. <br/>
      Please check if you have the right URL.
    </p>
    <button 
      className="Button" 
      onClick={() => history.goBack()}
    >
      Go Back
    </button>
  </div>

export default withRouter(NotFoundPage);