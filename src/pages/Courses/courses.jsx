import React from 'react';
import './Courses.scss'; // Import CSS for Courses page

function Courses() {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Parcours</h2>
      <div className="courses-content">
        <div className="courses-date">2023</div>
        <div className="courses-box">
          <p>Texte modifiable ici.</p>
        </div>
      </div>
      <div className="courses-content">
        <div className="courses-date">2022</div>
        <div className="courses-box">
          <p>Texte modifiable ici.</p>
        </div>
      </div>
      {/* Ajoutez plus de sections de contenu ici si nécessaire */}
    </div>
  );
}

export default Courses;