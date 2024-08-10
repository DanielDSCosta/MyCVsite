import React from 'react';
import './Courses.scss'; // Assurez-vous que ce chemin est correct

function Courses() {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Parcours</h2>
      <div className="courses-content">
        <div className="courses-date">2012-2013</div>
        <div className="courses-box">
          <p>Bac GSI (Gestion des systèmes d’informations) Au lycée Hernest Hemingway à Nîmes</p>
        </div>
      </div>
      <div className="courses-content">
        <div className="courses-date">2013-2015</div>
        <div className="courses-box">
          <p>BTS SIO (Services Informatiques aux Organisations) Au lycée Jean Mermoz à Montpellier</p>
        </div>
      </div>
      <div className="courses-content">
        <div className="courses-date">2016-2017</div>
        <div className="courses-box">
          <p>Licence en Informatique à la fac des sciences de Montpellier</p>
        </div>
      </div>
      <div className="courses-content">
        <div className="courses-date">2023-2024</div>
        <div className="courses-box">
          <p>Formation OpenClassrooms en Développement Web</p>
        </div>
      </div>
      {/* Ajoutez plus de sections de contenu ici si nécessaire */}
    </div>
  );
}

export default Courses;