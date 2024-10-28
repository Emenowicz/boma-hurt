import React from 'react';
import './ContactMap.css';

const ContactMap: React.FC = () => {
  return (
      <section className="contact-map-section" id="contact">
        <div className="contact-map-box">
          <div className="map-container">
            <h2>Znajdź nas</h2>
            <iframe
                width="100%"
                height="600"
                id="gmap_canvas"
                src="https://maps.google.com/maps?hl=pl&q=Boma%20Hurt&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                title="Mapa Lokalizacji Boma Hurt"
            />
          </div>
          <div className="contact-details">
            <h2>Skontaktuj się z nami</h2>
            <p><strong>Adres:</strong> Stefana Batorego 4, 05-400 Otwock</p>
            <p><strong>Telefon:</strong> <a href="tel:+48227793505">+48 227 793 505</a></p>
            <p><strong>Email:</strong> <a href="mailto:contact@boma-hurt.pl">contact@boma-hurt.pl</a></p>
          </div>
        </div>
      </section>
  );
};

export default ContactMap;