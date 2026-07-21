import React from 'react';
import portraitImg from '../assets/images/portrait.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Niren Sharma</h1>
          <h2 className="hero-title">AI MERN Stack Developer</h2>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Hire Me
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              <i className="fas fa-eye"></i> View Work
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a 
              href="https://github.com/Niren-Sharma" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/niren-sharma/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="mailto:sniren24@gmail.com" 
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Image Frame */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src={portraitImg} 
              alt="Niren Sharma" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;