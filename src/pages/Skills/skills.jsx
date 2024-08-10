import React from 'react';
import './Skills.scss'; // Import CSS for Skills page

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Compétences</h2>
      
      {/* Première rangée avec l'icône à droite */}
      <div className="skills-content">
        <div className="skills-box">
          <h3>Front End</h3>
          <p>Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.</p>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skills-icon">
          <i className="fa-solid fa-code"></i>
        </div>
      </div>
      
      {/* Deuxième rangée avec l'icône à gauche */}
      <div className="skills-content">
        <div className="skills-icon back-end">
          <i className="fa-solid fa-database"></i>
        </div>
        <div className="skills-box">
          <h3 className="back-end-title">Back End</h3>
          <p>Développement de serveurs, d'API et de bases de données robustes et sécurisés.</p>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>

      {/* Troisième rangée avec l'icône à droite */}
      <div className="skills-content">
        <div className="skills-box">
          <h3 className="work-environment-title">Environnement de travail</h3>
          <p>Utilisation d'outils et de plateformes pour le développement et la gestion de projets.</p>
          <ul className="skills-list">
            <li>Git</li>
            <li>VS Code</li>
          </ul>
          <p>
            <strong>Système d'exploitation :</strong> Windows
          <br />
            <strong>Autres compétences :</strong> Maîtrise de l'anglais, traduction anglais/français, rédaction, maîtrise du portugais
          <br />
            <strong>Savoir-être :</strong> Capacité d'adaptation, travail en équipe, organisation, rigueur, autonomie
         </p>
        </div>
        <div className="skills-icon work-environment">
          <i className="fa-solid fa-tools"></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;