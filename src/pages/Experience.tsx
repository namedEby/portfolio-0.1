import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Zellis HR india pvt ltd',
    duration: '2023 - Present',
    description:
      'Contributed to the development of a modular React Native application using micro-frontend architecture, enhancing scalability and code maintainability. Supported the migration of 30+ features from a legacy Angular codebase via iframe integration to ensure backward compatibility. Implemented theming with React Native Paper for a consistent and customizable cross-platform UI.',
  },
  {
    title: 'Frontend lead',
    company: 'Glitchh',
    duration: '2022 - 2023',
    description:
      'Built a gamer-focused social media platform using React, GraphQL, Redux, and TypeScript, boosting user engagement by 30%. Delivered immersive 3D visuals with Three.js and Theatre.js. Collaborated within a 5-member team. Researched live-streaming support for 500+ users and integrated Google Analytics to drive a 35% increase in feature adoption.',
  },
   {
    title: 'Frontend Developer',
    company: 'Edith Industries',
    duration: '2029 - 2020',
    description:
      'Developed a full-featured social media app using Flutter and Firebase with real-time chat, secure auth, and cloud-hosted content. Designed scalable backend and analytics tracking, boosting daily active users by 40% and retention by 25%. Handled database administration and app architecture to optimize performance.',
  },
];

const Experience: React.FC = () => (
  <section className="experience-section" id="experience">
    <motion.div
      className="experience-content"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.title + exp.company}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
