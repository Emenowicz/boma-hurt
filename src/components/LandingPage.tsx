import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Boma Hurt</h1>
      <p>Delivering fresh produce since 2011.</p>
      <a href="#contact" className="cta-button">Contact Us</a>
    </div>
  );
};

export default LandingPage;