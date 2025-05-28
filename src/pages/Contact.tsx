import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => (
  <section className="contact-section" id="contact">
    <motion.div
      className="contact-content"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2>Contact</h2>
      <p className="contact-description">
        Interested in working together or want to say hello? Reach out via email or connect with me on GitHub!
      </p>
      <div className="contact-links">
+        <a
          href="https://mail.google.com/mail/?view=cm&to=ebystephen00@gmail.com"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ebystephen00@gmail.com
        </a>
        <a href="https://github.com/namedEby" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
