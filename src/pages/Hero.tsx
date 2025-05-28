// Hero.tsx
import React from 'react';
import './Hero.css';
import dp from '../assets/dp.jpg';
import { motion } from 'framer-motion';
import HeroNav from '../components/HeroNav';
import HeroGeometry, { Triangle } from '../components/HeroGeometry';

const Hero: React.FC = () => {
  const navButtons = [
    {
      label: 'About Me',
      href: '#about',
      onClick: () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Projects',
      href: '#projects',
      onClick: () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Experience',
      href: '#experience',
      onClick: () => {
        const expSection = document.getElementById('experience');
        if (expSection) expSection.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Contact',
      href: '#contact',
      onClick: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'GitHub',
      href: 'https://github.com/eby-stephen',
      external: true,
    },
  ];

  const triangles: Triangle[] = [
    { points: '400,100 1200,200 700,700', className: 'geo geo1' },
    { points: '200,600 350,780 100,780', className: 'geo geo2' },
    { points: '1300,100 1400,300 1200,300', className: 'geo geo3' },
    { points: '900,600 1100,780 700,780', className: 'geo geo4' },
    { points: '1000,200 1150,350 850,350', className: 'geo geo5' },
    { points: '200,200 300,350 100,350', className: 'geo geo6' },
    { points: '600,100 700,250 500,250', className: 'geo geo7' },
    { points: '1200,500 1350,650 1050,650', className: 'geo geo8' },
    { points: '400,700 600,780 200,780', className: 'geo geo9' },
    { points: '800,300 950,450 650,450', className: 'geo geo10' },
  ];

  return (
    <section className="hero">
      <HeroGeometry triangles={triangles} />
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1>Eby Stephen</h1>
        <p className="tagline">Fullstack Frontend Developer</p>
        <p className="hero-description">
          I build beautiful, performant web and mobile apps with modern JavaScript frameworks.<br />
          Experienced in React, React Native, and TypeScript. Always learning, always building.
        </p>
        <HeroNav buttons={navButtons} />
      </motion.div>
      <div className="hero-image-row">
        <div className="hero-separator-left" />
        <div className="hero-image-wrapper">
          <img src={dp} alt="Profile" className="hero-image" />
        </div>
        <div className="hero-separator-right" />
      </div>
    </section>
  );
};

export default Hero;
