import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
      <section className="about-us" id="about">
        <div className="content-wrapper">
          <h2>O Nas</h2>
          <p className="intro-text">
            Boma Hurt s.c. to rodzinna firma działająca w branży spożywczej od 2011 roku. Z pasją dostarczamy nasze
            produkty zarówno hurtowo, jak i detalicznie.
          </p>
          <div className="info-container">
            <div className="text-section">
              <p>Nasza siedziba w Otwocku przy ulicy Stefana Batorego 4 to miejsce, gdzie każdy klient – sklep, restauracja, czy osoba prywatna – znajdzie coś dla siebie.</p>
              <p>W naszej ofercie znajdziesz świeże owoce, warzywa, słodycze, napoje oraz różne produkty przetworzone.</p>
            </div>
            <div className="text-section">
              <p>Dla nas najważniejsza jest jakość i zadowolenie klientów. Zawsze stawiamy na indywidualne podejście i jesteśmy gotowi, by służyć pomocą i doradztwem.</p>
              <p>Jesteśmy otwarci od <strong>poniedziałku do piątku</strong>, w godzinach <strong>4:30-16:00</strong>, a także w <strong>soboty</strong> od <strong>4:30 do 12:00</strong>. Zapraszamy serdecznie – poznaj naszą ofertę i wybierz najlepsze produkty dla siebie!</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutUs;