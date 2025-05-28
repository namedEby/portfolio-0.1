import React from 'react';
import './AboutMe.css';
import TechIcons from '../components/TechIcons';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Eby Stephen—a passionate developer who loves turning ideas into beautiful, interactive digital experiences. My journey began with curiosity for how things work on the web, and it quickly grew into a love for building seamless, user-focused applications.
        </p>
        <p>
          I specialize in crafting modern web and mobile frontends using React, React Native, and TypeScript. I thrive on solving real-world problems, collaborating with creative teams, and learning new technologies that push the boundaries of what’s possible.
        </p>
        <p>
          When I’m not coding, you’ll find me exploring new UI trends, sketching interface ideas, or sharing knowledge with the dev community. Let’s build something amazing together!
        </p>
        <TechIcons />
      </div>
    </section>
  );
};

export default AboutMe;
