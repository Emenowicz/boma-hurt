import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <section className="hero">
        <div className="hero-content">
          <h1>Boma Hurt – Świeże produkty od 2011 roku</h1>
          <p>Dostarczamy najlepsze owoce i warzywa hurtowo i detalicznie</p>
          <div className="button-group">
            <a href="#about" className="cta-button" onClick={handleScrollToSection('about')}>O nas</a>
            <a href="#products" className="cta-button" onClick={handleScrollToSection('products')}>Sprawdź ofertę</a>
            <a href="#contact" className="cta-button" onClick={handleScrollToSection('contact')}>Kontakt</a>
          </div>
        </div>
      </section>
  );
};

export default LandingPage;