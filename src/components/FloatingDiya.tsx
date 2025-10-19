import { useEffect, useState } from 'react';
import diyaImage from '@/assets/diya.png';

interface FloatingDiyaProps {
  delay?: number;
  duration?: number;
  startPosition?: { x: number; y: number };
}

const FloatingDiya = ({ delay = 0, duration = 4, startPosition }: FloatingDiyaProps) => {
  const [position] = useState(
    startPosition || {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    }
  );

  return (
    <div
      className="absolute pointer-events-none animate-float opacity-60"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <img
        src={diyaImage}
        alt="Floating Diya"
        className="w-12 h-12 md:w-16 md:h-16 animate-glow-pulse"
        style={{
          filter: 'drop-shadow(0 0 15px hsl(38 92% 50% / 0.6))',
        }}
      />
    </div>
  );
};

export default FloatingDiya;
