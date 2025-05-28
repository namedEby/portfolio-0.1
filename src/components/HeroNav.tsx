import React from 'react';

interface NavButton {
  label: string;
  href: string;
  onClick?: () => void;
  external?: boolean;
}

interface HeroNavProps {
  buttons: NavButton[];
}

const HeroNav: React.FC<HeroNavProps> = ({ buttons }) => (
  <div className="hero-links">
    {buttons.map((btn, idx) =>
      btn.external ? (
        <a
          key={btn.label}
          href={btn.href}
          className="hero-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {btn.label}
        </a>
      ) : (
        <a
          key={btn.label}
          href={btn.href}
          className="hero-link"
          onClick={e => {
            e.preventDefault();
            btn.onClick && btn.onClick();
          }}
        >
          {btn.label}
        </a>
      )
    )}
  </div>
);

export default HeroNav;
