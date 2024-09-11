import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2>Skontaktuj się z nami</h2>
      <div className="contact-details">
        <p><strong>Adres:</strong> Stefana Batorego 4, 05-400 Otwock</p>
        <p><strong>Telefon:</strong> 22 779 35 05</p>
        <p><strong>Email:</strong> contact@boma-hurt.pl</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Twoje Imię" required />
        <input type="email" placeholder="Twój Email" required />
        <textarea placeholder="Wiadomość" required></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
};

export default Contact;