import React from 'react';
import './AboutMe.css';
import TechIcons from '../components/TechIcons';
import { ABOUT } from '../components/constants';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-me-content">
        <h2>{ABOUT.heading}</h2>
        {ABOUT.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <TechIcons />
      </div>
    </section>
  );
};

export default AboutMe;
