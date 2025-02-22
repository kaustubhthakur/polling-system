import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu (Mobile) */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Logo */}
      <div className="logo">
        <span>Your Logo</span>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="/login" onClick={toggleMenu}>Login</a>
        <a href="/register" onClick={toggleMenu}>Register</a>
      </div>
    </nav>
  );
};

export default Navbar;