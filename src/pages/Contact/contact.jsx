import React from 'react';
import './Contact.scss'; // Import CSS for Contact page

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactez-moi !</h2>
      <p className="contact-description">
        Actuellement à la recherche d'un nouvel emploi, je suis intéressée par les postes de :
      </p>
      <ul className="contact-list">
        <li><strong>Développeur front-end</strong></li>
        <li><strong>Intégrateur web</strong></li>
      </ul>
      <div className="contact-cards">
        <div className="contact-card card-phone">
          <i className="fas fa-phone"></i>
          <p>+33 6 09 24 81 45</p>
        </div>
        <div className="contact-card card-email">
          <i className="fas fa-envelope"></i>
          <p>Daniel.dasilva.gsi@gmail.com</p>
        </div>
        <div className="contact-card card-meet">
          <strong>Vous souhaitez me rencontrer ?</strong>
          <p><br />Je suis disponible à <strong>Montpellier</strong> et ses alentours</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;