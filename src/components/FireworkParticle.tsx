import { useEffect, useState } from 'react';

interface FireworkParticleProps {
  delay?: number;
}

const FireworkParticle = ({ delay = 0 }: FireworkParticleProps) => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 60 + 20,
  });
  
  const [color] = useState(() => {
    const colors = [
      'hsl(38 92% 50%)',
      'hsl(25 95% 61%)',
      'hsl(45 100% 70%)',
      'hsl(280 60% 60%)',
      'hsl(340 80% 60%)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  });

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      {/* Center burst */}
      <div
        className="w-3 h-3 rounded-full animate-firework-burst"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}`,
          animationDelay: `${delay}s`,
        }}
      />
      
      {/* Surrounding particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-firework-burst"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}`,
            left: `${Math.cos((i * Math.PI) / 4) * 30}px`,
            top: `${Math.sin((i * Math.PI) / 4) * 30}px`,
            animationDelay: `${delay + 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FireworkParticle;
