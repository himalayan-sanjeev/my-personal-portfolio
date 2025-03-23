import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">SANJEEV POUDEL</Link>
            <p className="footer-tagline">Software Engineer</p>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-social">
            <a href="https://github.com/himalayan-sanjeev" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mrsanjeevpoudel/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@sanjeevpoudel.com">
              <FaEnvelope />
            </a>
            <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sanjeev Poudel &middot; Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;