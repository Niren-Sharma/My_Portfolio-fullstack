import React from 'react';
import figmaImg from '../assets/images/Figma.png';
import mernImg from '../assets/images/Mern.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Full Stack Deployment',
      tech: 'AWS-EC2, Terraform, Nginx',
      img: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=800'
    },
    {
      title: 'College ERP System',
      tech: 'Figma UI & Frontend',
      img: figmaImg
    },
    {
      title: 'Holi Fun App',
      tech: 'Android Studio',
      img: 'https://res.cloudinary.com/dr8l1gwg7/image/upload/v1780654162/Holi_riqmld.png'
    },
    {
      title: 'Alert Notification App',
      tech: 'Firebase Integration',
      img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800'
    },
    {
      title: 'MERN Portfolio',
      tech: 'Ongoing Project',
      img: mernImg
    },
    {
      title: 'More Projects',
      tech: 'Coming Soon',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <div className="section-header">
          <h2 className="bordered-title">PORTFOLIO</h2>
        </div>
      </div>

      <div className="portfolio__grid">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="portfolio__overlay">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;