import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        'Tech Enthusiast',
        'Software Engineer',
        'Freelance Writer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Sanjeev Poudel</span>
          </h1>
          <h2 className="home-subtitle">
            I'm a <span ref={typedTextRef}></span>
          </h2>
          <p className="home-description">
            I specialize in creating clean, efficient, and user-friendly digital experiences. With expertise in full-stack development, backend systems, and data-driven solutions, I’m passionate about building software that solves real-world problems and delivers meaningful impact. Let’s collaborate to turn your ideas into reality!
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/himalayan-sanjeev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mrsanjeevpoudel/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@sanjeevpoudel.com"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="profile-image-container">
            <img
              src="images/profile-image.jpg"
              alt="Sanjeev Poudel"
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder-profile.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;