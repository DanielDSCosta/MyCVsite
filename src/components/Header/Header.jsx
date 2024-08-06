import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/" className="header__link" activeClassName="header__link--active">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to="/page2" className="header__link" activeClassName="header__link--active">Page 2</NavLink>
          <NavLink to="/page3" className="header__link" activeClassName="header__link--active">Page 3</NavLink>
          <NavLink to="/page4" className="header__link" activeClassName="header__link--active">Page 4</NavLink>
          <NavLink to="/page5" className="header__link" activeClassName="header__link--active">Page 5</NavLink>
          <NavLink to="/page6" className="header__link" activeClassName="header__link--active">Page 6</NavLink>
        </nav>
      </header>
      <button className="header__menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`header__popup ${menuOpen ? 'header__popup--open' : ''}`}>
        <NavLink to="/" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <div className="header__popup__separator"></div>
        <NavLink to="/page2" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Page 2</NavLink>
        <div className="header__popup__separator"></div>
        <NavLink to="/page3" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Page 3</NavLink>
        <div className="header__popup__separator"></div>
        <NavLink to="/page4" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Page 4</NavLink>
        <div className="header__popup__separator"></div>
        <NavLink to="/page5" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Page 5</NavLink>
        <div className="header__popup__separator"></div>
        <NavLink to="/page6" className="header__popup__link" activeClassName="header__link--active" onClick={toggleMenu}>Page 6</NavLink>
      </div>
    </>
  );
}

export default Header;