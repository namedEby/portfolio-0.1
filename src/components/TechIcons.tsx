import React from 'react';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import typescriptIcon from '../assets/typescript.svg';
import reactqueryIcon from '../assets/reactquery.svg';
import './TechIcons.css';

const TechIcons: React.FC = () => (
  <div className="tech-icons">
    <img src={javascriptIcon} alt="JavaScript" title="JavaScript" className="tech-icon" />
    <img src={typescriptIcon} alt="TypeScript" title="TypeScript" className="tech-icon" />
    <img src={reactIcon} alt="React" title="React" className="tech-icon" />
    <img src={reactqueryIcon} alt="React Query" title="React Query" className="tech-icon" />
  </div>
);

export default TechIcons;
