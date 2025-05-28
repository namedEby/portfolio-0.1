import React from 'react';

export interface Triangle {
  points: string;
  className: string;
}

export interface HeroGeometryProps {
  triangles: Triangle[];
  viewBox?: string;
}

const HeroGeometry: React.FC<HeroGeometryProps> = ({ triangles, viewBox = '0 0 1440 800' }) => (
  <div className="hero-bg-geometry">
    <svg width="100%" height="100%" viewBox={viewBox} className="hero-geo-svg">
      {triangles.map((tri, idx) => (
        <polygon key={idx} className={tri.className} points={tri.points} />
      ))}
    </svg>
  </div>
);

export default HeroGeometry;
