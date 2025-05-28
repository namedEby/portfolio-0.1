import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Eby Stephen. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
