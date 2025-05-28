import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, description }) => (
  <div className="experience-item">
    <h3>{title}</h3>
    <span className="exp-company">{company}</span>
    <span className="exp-duration">{duration}</span>
    <p>{description}</p>
  </div>
);

export default ExperienceCard;
