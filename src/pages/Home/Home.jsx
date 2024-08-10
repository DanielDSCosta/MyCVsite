import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="description">
        <h2>Bonjour, je m'appelle Daniel et je suis</h2>
        <h1>Développeur web</h1>
        <p>Je suis à la recherche d'un emploi en CDI (temps plein) à Montpellier et alentours.</p>
      </div>
      <div className="icons-container">
        <div className="icon-item">
          <h3>Front End</h3>
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="icon-item">
          <h3>Back End</h3>
          <i class="fa-solid fa-database"></i>
        </div>
        <div className="icon-item">
          <h3>Mobile</h3>
          <i class="fa-solid fa-mobile-screen-button"></i>
        </div>
        <div className="icon-item">
          <h3>Français, Portugais, Anglais</h3>
          <i class="fa-solid fa-globe"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;