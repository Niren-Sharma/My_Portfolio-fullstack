import React from 'react';

const About = () => {
  return (
    <section className="about" id="about" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="bordered-title">About Me</h2>
        </div>

        <div className="about-content">
          <p className="about-text">
            I am an enthusiastic <strong>AI MERN Stack Developer</strong> passionate about building modern web applications, scalable backends, and integrating smart AI features. I focus on writing clean, efficient code and delivering sleek, user-friendly digital experiences.
          </p>

          <div className="about-details">
            <div className="detail-card">
              <h3>Role</h3>
              <p>Full-Stack / MERN Developer</p>
            </div>
            <div className="detail-card">
              <h3>Specialization</h3>
              <p>React, Node.js, Express & MongoDB</p>
            </div>
            <div className="detail-card">
              <h3>Focus</h3>
              <p>AI Integrations & Clean UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;