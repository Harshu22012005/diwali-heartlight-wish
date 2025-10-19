import { useEffect, useState } from 'react';

interface SparkleProps {
  delay?: number;
}

const Sparkle = ({ delay = 0 }: SparkleProps) => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  return (
    <div
      className="absolute w-1 h-1 md:w-2 md:h-2 bg-primary rounded-full animate-sparkle pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
        boxShadow: '0 0 10px hsl(38 92% 50% / 0.8)',
      }}
    />
  );
};

export default Sparkle;
