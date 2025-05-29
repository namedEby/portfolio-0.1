import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { CONTACT } from '../components/constants';

const Contact: React.FC = () => (
  <section className="contact-section" id="contact">
    <motion.div
      className="contact-content"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2>{CONTACT.heading}</h2>
      <p className="contact-description">{CONTACT.description}</p>
      <div className="contact-links">
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${CONTACT.email}`}
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT.email}
        </a>
        <a href={CONTACT.github} className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
