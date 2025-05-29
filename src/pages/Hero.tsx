// Hero.tsx
import React from 'react';
import './Hero.css';
import dp from '../assets/dp.jpg';
import { motion } from 'framer-motion';
import HeroNav from '../components/HeroNav';
import HeroGeometry, { Triangle } from '../components/HeroGeometry';
import { HERO } from '../components/constants';

const Hero: React.FC = () => {
  const navButtons = HERO.nav.map(btn => ({
    ...btn,
    onClick: btn.href && !btn.external ? () => {
      const section = document.getElementById(btn.href.replace('#', ''));
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } : undefined
  }));

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
        <h1>{HERO.name}</h1>
        <p className="tagline">{HERO.tagline}</p>
        <p className="hero-description">
          {HERO.description.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
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
