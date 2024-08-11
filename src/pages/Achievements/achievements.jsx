import React from 'react';
import './Achievements.scss';
import argentb from '../../assets/rendu/argent-bank.webp';
import kasa from '../../assets/rendu/kasa.webp';
import nina from '../../assets/rendu/nina-carducci.webp';
import sophie from '../../assets/rendu/sophie-bluel.webp';

function Achievements() {
  return (
    <div className="achievements-container">
      <h2 className="achievements-title">Réalisations</h2>
      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="achievement-image">
            <img src={argentb} alt="Argent-Bank"/>
            <div className="achievement-overlay">
              <h3>Projet : Argent-Bank</h3>
              <p className="skills">HTML5, CSS3 / SCSS, REACT, REDUX, JAVASCRIPT, GIT</p>
              <p className="description">Projet réalisé dans le cadre de la formation Oppenclassroom.</p>
            </div>
          </div>
          <div className="achievement-name">Argent-Bank</div>
        </div>
        <div className="achievement-card">
          <div className="achievement-image">
            <img src={kasa} alt="kasa" />
            <div className="achievement-overlay">
              <h3>Projet : Kasa</h3>
              <p className="skills">HTML5, CSS3 / SCSS, REACT, REDUX, JAVASCRIPT, GIT</p>
              <p className="description">Projet réalisé dans le cadre de la formation Oppenclassroom.</p>
            </div>
          </div>
          <div className="achievement-name">Kasa</div>
        </div>
        <div className="achievement-card">
          <div className="achievement-image">
            <img src={nina} alt="Nina Carducci" />
            <div className="achievement-overlay">
              <h3>Projet : Nina Carducci</h3>
              <p className="skills">HTML5, CSS3 / SCSS, REACT, REDUX, JAVASCRIPT, GIT</p>
              <p className="description">Projet réalisé dans le cadre de la formation Oppenclassroom.</p>
            </div>
          </div>
          <div className="achievement-name">Nina Carducci</div>
        </div>
        <div className="achievement-card">
          <div className="achievement-image">
            <img src={sophie} alt="Sophie Bluel" />
            <div className="achievement-overlay">
              <h3>Projet : Sophie Bluel</h3>
              <p className="skills">HTML5, CSS3 / SCSS, REACT, REDUX, JAVASCRIPT, GIT</p>
              <p className="description">Projet réalisé dans le cadre de la formation Oppenclassroom.</p>
            </div>
          </div>
          <div className="achievement-name">Sophie Bluel</div>
        </div>
      </div>
      <p className="github-link">
        Retrouvez plus de mes projets sur <a href="https://github.com/DanielDSCosta" target="_blank" rel="noopener noreferrer">mon GitHub</a>.
      </p>
    </div>
  );
}

export default Achievements;