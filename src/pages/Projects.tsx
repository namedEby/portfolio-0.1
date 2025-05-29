import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { PROJECTS } from '../components/constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>{PROJECTS.heading}</h2>
        <p className="projects-description">{PROJECTS.description}</p>
        <div className="project-cards">
          {PROJECTS.list.map((project, idx) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
