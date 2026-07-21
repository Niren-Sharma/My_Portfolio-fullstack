import React from 'react';

const Skills = () => {
  const skillsList = [
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Python', icon: 'devicon-python-plain' }
  ];

  return (
    <section className="skills" id="skills" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="bordered-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`${skill.icon} skill-icon`}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;