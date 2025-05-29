import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { EXPERIENCE } from '../components/constants';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => (
  <section className="experience-section" id="experience">
    <motion.div
      className="experience-content"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2>{EXPERIENCE.heading}</h2>
      <div className="experience-list">
        {EXPERIENCE.list.map((exp, idx) => (
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
