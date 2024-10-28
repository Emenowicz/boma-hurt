import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2>Skontaktuj się z nami</h2>
      <div className="contact-details">
        <p><strong>Adres:</strong> Stefana Batorego 4, 05-400 Otwock</p>
        <p><strong>Telefon:</strong> <a href="tel:+48 22 779 35 05">+48 227 793 505</a></p>
        <p><strong>Email:</strong> <a href="mailto:contact@boma-hurt.pl">contact@boma-hurt.pl</a></p>
      </div>
    </section>
  );
};

export default Contact;