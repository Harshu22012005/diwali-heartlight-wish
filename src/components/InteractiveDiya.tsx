import { useState } from 'react';
import diyaImage from '@/assets/diya.png';
import { Button } from '@/components/ui/button';

const InteractiveDiya = () => {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 mt-12 md:mt-16">
      <div className="relative">
        <img
          src={diyaImage}
          alt="Interactive Diya"
          className={`w-24 h-24 md:w-32 md:h-32 transition-all duration-1000 ${
            isLit
              ? 'animate-diya-light scale-110'
              : 'opacity-40 grayscale'
          }`}
          style={{
            filter: isLit
              ? 'drop-shadow(0 0 40px hsl(38 92% 50% / 0.9)) drop-shadow(0 0 80px hsl(25 95% 61% / 0.6))'
              : 'none',
          }}
        />
        {isLit && (
          <div className="absolute inset-0 animate-glow-pulse pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-sparkle"
                style={{
                  left: `${50 + Math.cos((i * Math.PI) / 4) * 60}%`,
                  top: `${50 + Math.sin((i * Math.PI) / 4) * 60}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <Button
        onClick={() => setIsLit(!isLit)}
        variant="outline"
        className="bg-card/80 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 hover:scale-110 font-elegant text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-lg hover:shadow-[0_0_30px_hsl(38_92%_50%/0.5)]"
      >
        {isLit ? '✨ दिवा पेटला' : '🪔 दिवा पेटवा'}
      </Button>
    </div>
  );
};

export default InteractiveDiya;
