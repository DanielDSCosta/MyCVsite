import React from 'react';
import './About.scss';
import photo from '../../assets/maphoto.png'; // Import the image

function About() {
  return (
    <div className="about-container">
      <div className="about-left">
      <img src={photo} alt="Daniel Da Silva Costa" className="about-photo" />
      <div className="about-info">
          <p><span className="label">Nom:</span> Da Silva Costa Daniel</p>
          <p><span className="label">Âge:</span> 28 ans</p>
          <p><span className="label">Ville:</span> Montpellier, 34 000</p>
          <p><span className="label">Hobbies:</span> jeux-vidéo, sport, web-design</p>
        </div>
      </div>
      <div className="about-right">
        <h2>À propos de moi</h2>
        <p>
          Développeur web junior, je recherche un emploi après avoir passé plusieurs mois en formation. 
          Cette expérience m’a permis d’acquérir autonomie et confiance en moi. 
          J’ai ainsi pu renforcer ce que j’ai appris lors de ma formation professionnelle, et étoffer mon panel de compétences.
        </p>
        <p>
          Je profite aujourd’hui du temps dont je dispose pour continuer d’apprendre de nouvelles technologies et notamment enrichir mes connaissances.
        </p>
        <p>
          Autonome de nature, je peux travailler seul ou en groupe, étant également capable de m’adapter à un environnement que je ne connais pas. 
          Je sais faire preuve de force de proposition lorsque l’on m’en donne la liberté, cherchant toujours à améliorer et optimiser les projets au maximum pour satisfaire au mieux la demande du client. 
          L’optimisation du code fait partie de mes priorités.
        </p>
      </div>
    </div>
  );
}

export default About;