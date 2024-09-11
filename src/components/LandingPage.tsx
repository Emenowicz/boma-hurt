import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
      <section className="hero">
        <div className="hero-content">
          <h1>Boma Hurt – Świeże produkty od 2011 roku</h1>
          <p>Dostarczamy najlepsze owoce i warzywa hurtowo i detalicznie</p>
          <a href="#products" className="cta-button">Sprawdź ofertę</a>
        </div>
      </section>
  );
};

export default LandingPage;