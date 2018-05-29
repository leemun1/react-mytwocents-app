import React from 'react';

const AboutPage = () =>
  <div className="Section">
    <h1 className="About__title">
      Hi there!
    </h1>
    <div className="About__description">
      <strong><i className="fas fa-quote-left"></i> myTwoCents</strong> is a forum application where users can freely share their opinions on any topic.
    </div>
    <div className="About__description">
      A <strong>Jar</strong> refers to a forum related to a certain topic. You may browse through the existing catalogue of <strong>Jars</strong>, or you may also create one on a new topic if you'd like.   
    </div>
    <div className="About__description">
      To get started, let's check out the list of <strong>Jars</strong>.
    </div>
    <button className="Button">
      Go!
    </button>
  </div>

export default AboutPage;