const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'linear-gradient(45deg, hsl(258 59% 8%), hsl(258 50% 20%), hsl(280 60% 15%), hsl(38 80% 25%), hsl(258 59% 8%))',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 8s ease-in-out infinite',
        }}
      />
      
      {/* Light Rays */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[200%] h-[200%] animate-light-ray opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, hsl(38 92% 50% / 0.3) 10deg, transparent 20deg, transparent 60deg, hsl(38 92% 50% / 0.3) 70deg, transparent 80deg)',
          }}
        />
      </div>
      
      {/* Pulsing circles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-glow-pulse"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 30}%`,
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            background: `radial-gradient(circle, hsl(38 92% 50% / 0.2) 0%, transparent 70%)`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
