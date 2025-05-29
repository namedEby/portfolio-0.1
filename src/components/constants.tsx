// src/components/constants.tsx

export const HERO = {
  name: 'Eby Stephen',
  tagline: 'Fullstack Frontend Developer',
  description: `I build beautiful, performant web and mobile apps with modern JavaScript frameworks.\nExperienced in React, React Native, and TypeScript. Always learning, always building.`,
  nav: [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
    { label: 'GitHub', href: 'https://github.com/eby-stephen', external: true },
  ],
};

export const ABOUT = {
  heading: 'About Me',
  paragraphs: [
    `Hi, I'm Eby Stephen—a passionate developer who loves turning ideas into beautiful, interactive digital experiences. My journey began with curiosity for how things work on the web, and it quickly grew into a love for building seamless, user-focused applications.`,
    `I specialize in crafting modern web and mobile frontends using React, React Native, and TypeScript. I thrive on solving real-world problems, collaborating with creative teams, and learning new technologies that push the boundaries of what’s possible.`,
    `When I’m not coding, you’ll find me exploring new UI trends, sketching interface ideas, or sharing knowledge with the dev community. Let’s build something amazing together!`,
  ],
};

export const PROJECTS = {
  heading: 'Projects',
  description: `Here are some of the web and mobile projects I’ve built, showcasing my skills in React, React Native, and TypeScript.`,
  list: [
    {
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio built with React and Framer Motion.'
    },
    {
      title: 'Social Media App',
      description: 'Fullstack social media platform with real-time features, built with React, Node.js, and Redux'
    },
    {
      title: 'Open-AI',
      description: 'A web app that integrates OpenAI’s API to provide AI-driven content generation, built with React and TypeScript.'
    },
    {
      title: '3js project',
      description: 'A 3D interactive experience using Three.js, showcasing advanced animations and graphics.'
    },
    {
      title: 'E-commerce App',
      description: 'A fully functional e-commerce application built with Flutter, featuring product listings, cart management, and payment integration.'
    }
   
  ]
};

export const EXPERIENCE = {
  heading: 'Experience',
  list: [
    {
      title: 'Frontend Developer',
      company: 'Zellis HR india pvt ltd',
      duration: '2023 - Present',
      description: 'Contributed to the development of a modular React Native application using micro-frontend architecture, enhancing scalability and code maintainability. Supported the migration of 30+ features from a legacy Angular codebase via iframe integration to ensure backward compatibility. Implemented theming with React Native Paper for a consistent and customizable cross-platform UI. Integrated Keycloak for secure authentication and access control, helping reduce login-related issues by 90%.'
    },
    {
      title: 'Frontend Lead',
      company: 'Glitchh',
      duration: '2022 - 2023',
      description: 'Built a gamer-focused social media platform using React, GraphQL, Redux, and TypeScript, boosting user engagement by 30%. Delivered immersive 3D visuals with Three.js and Theatre.js. Collaborated within a 5-member team to ensure 85% test coverage and weekly code reviews. Researched live-streaming support for 500+ users and integrated Google Analytics to drive a 35% increase in feature adoption.'
    },
        {
      title: 'Flutter Developer',
      company: 'Edith Industries',
      duration: '2019 - 2020',
      description: 'Developed a full-featured social media app using Flutter and Firebase with real-time chat, secure auth, and cloud-hosted content. Designed scalable backend and analytics tracking, boosting daily active users by 40% and retention by 25%. Handled database administration and app architecture to optimize performance.'
    }
  ]
};

export const CONTACT = {
  heading: 'Contact',
  description: 'Interested in working together or want to say hello? Reach out via email or connect with me on GitHub!',
  email: 'ebystephen00@gmail.com',
  github: 'https://github.com/namedEby',
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Eby Stephen. All rights reserved.`
};
