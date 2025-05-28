import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
