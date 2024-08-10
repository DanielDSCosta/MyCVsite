import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to="#home" className="header__link" activeClassName="header__link--active">
            <i className="fa-solid fa-house"></i>
          </Link>
          <Link to="#about" className="header__link" activeClassName="header__link--active">À propos</Link>
          <Link to="#skills" className="header__link" activeClassName="header__link--active">Compétences</Link>
          <Link to="#courses" className="header__link" activeClassName="header__link--active">Cours</Link>
          <Link to="#achievements" className="header__link" activeClassName="header__link--active">Réalisations</Link>
          <Link to="#contact" className="header__link" activeClassName="header__link--active">Contact</Link>
        </nav>
      </header>
      <button className="header__menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`header__popup ${menuOpen ? 'header__popup--open' : ''}`}>
        <Link to="#home" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>
          <i className="fa-solid fa-house"></i>
        </Link>
        <div className="header__popup__separator"></div>
        <Link to="#about" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>À propos</Link>
        <Link to="#skills" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Compétences</Link>
        <Link to="#courses" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Cours</Link>
        <Link to="#achievements" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Réalisations</Link>
        <Link to="#contact" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Contact</Link>
      </div>
    </>
  );
}

export default Header;