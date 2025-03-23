import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">SANJEEV POUDEL</span>
        </Link>

        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;