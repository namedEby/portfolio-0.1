import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio built with React and Framer Motion.'
    },
    {
      title: 'Social Media App',
      description: 'Fullstack social media application with real-time features, built with React, Node.js, and Redux.'
    },
    {
      title: 'open-Ai',
      description: 'An AI-powered chatbot application using OpenAI API, React, and TypeScript.'
    },
    {
        title: '3js project',
        description: 'A 3D interactive web application built with Three.js and React, showcasing 3D models and animations.'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>Projects</h2>
        <p className="projects-description">
          Here are some of the web and mobile projects I’ve built, showcasing my skills in React, React Native, and TypeScript.
        </p>
        <div className="project-cards">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
