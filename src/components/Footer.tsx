import React from 'react';
import './Footer.css';
import { FOOTER } from '../components/constants';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>{FOOTER.copyright}</span>
    </div>
  </footer>
);

export default Footer;
