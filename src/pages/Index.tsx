import { useEffect, useState } from 'react';
import harishchandraImage from '@/assets/harishchandra.jpg';
import fireworksImage from '@/assets/fireworks.jpg';
import FloatingDiya from '@/components/FloatingDiya';
import Sparkle from '@/components/Sparkle';
import InteractiveDiya from '@/components/InteractiveDiya';
import AnimatedBackground from '@/components/AnimatedBackground';
import FireworkParticle from '@/components/FireworkParticle';
import MusicControl from '@/components/MusicControl';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowMain(true);
    }, 4500);

    const fireworksTimer = setTimeout(() => {
      setShowFireworks(true);
    }, 9000);

    const endingTimer = setTimeout(() => {
      setShowEnding(true);
    }, 12000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(fireworksTimer);
      clearTimeout(endingTimer);
    };
  }, []);

  const replayAnimation = () => {
    setShowIntro(true);
    setShowMain(false);
    setShowFireworks(false);
    setShowEnding(false);
    
    setTimeout(() => {
      setShowIntro(false);
      setShowMain(true);
    }, 4500);
    
    setTimeout(() => {
      setShowFireworks(true);
    }, 9000);
    
    setTimeout(() => {
      setShowEnding(true);
    }, 12000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-[hsl(258_50%_20%)] to-[hsl(38_80%_30%)] flex items-center justify-center">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Floating Diyas - More visible */}
        {[...Array(12)].map((_, i) => (
          <FloatingDiya key={`diya-${i}`} delay={i * 0.4} duration={3.5 + i * 0.3} />
        ))}
        
        {/* Sparkles - More abundant */}
        {[...Array(50)].map((_, i) => (
          <Sparkle key={`sparkle-${i}`} delay={i * 0.2} />
        ))}
        
        {/* Fireworks Particles */}
        {showFireworks && [...Array(15)].map((_, i) => (
          <FireworkParticle key={`firework-${i}`} delay={i * 0.3} />
        ))}
      </div>

      {/* Fireworks Background (Ending) */}
      {showEnding && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in z-5"
          style={{
            backgroundImage: `url(${fireworksImage})`,
            animationDelay: '0.5s',
          }}
        />
      )}

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
        {/* Intro Animation */}
        {showIntro && (
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-elegant text-foreground animate-text-glow drop-shadow-2xl" style={{ textShadow: 'var(--text-shadow-strong)' }}>
                When lights meet hearts...
              </h2>
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <p className="text-2xl md:text-4xl lg:text-5xl font-elegant text-primary animate-fade-in-delay animate-text-glow" style={{ textShadow: 'var(--text-shadow-strong)' }}>
              a new Diwali begins. 💛
            </p>
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        {showMain && (
          <div className="text-center space-y-8 md:space-y-12 animate-zoom-in">
            {/* Harishchandra's Photo with Enhanced Glow */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative group">
                {/* Multiple glow layers for video effect */}
                <div className="absolute inset-0 bg-primary rounded-full blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-glow-pulse" />
                <div className="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                
                {/* Rotating ring effect */}
                <div className="absolute inset-0 animate-light-ray opacity-30">
                  <div className="w-full h-full rounded-full border-4 border-primary border-t-transparent" />
                </div>
                
                <img
                  src={harishchandraImage}
                  alt="Harishchandra Sambhaji Pakhale"
                  className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-[6px] border-primary shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-glow-pulse"
                  style={{
                    boxShadow: '0 0 80px hsl(38 92% 50% / 0.8), 0 0 120px hsl(25 95% 61% / 0.6), 0 0 160px hsl(38 92% 50% / 0.4)',
                  }}
                />
                
                {/* Sparkle effects around photo */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full animate-sparkle"
                    style={{
                      left: `${50 + Math.cos((i * Math.PI) / 6) * 110}%`,
                      top: `${50 + Math.sin((i * Math.PI) / 6) * 110}%`,
                      animationDelay: `${i * 0.3}s`,
                      boxShadow: '0 0 10px hsl(38 92% 50%)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Marathi Message with Better Contrast */}
            <div className="space-y-6 md:space-y-8 px-4">
              <div className="inline-block bg-gradient-to-br from-card/60 via-card/50 to-card/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-primary/30 shadow-2xl animate-slide-up" style={{ boxShadow: '0 0 60px hsl(38 92% 50% / 0.3), 0 20px 60px rgba(0,0,0,0.5)' }}>
                <div className="text-2xl md:text-4xl lg:text-6xl font-marathi text-foreground leading-relaxed space-y-6 md:space-y-8">
                  <p className="animate-slide-up flex items-center justify-center gap-3 md:gap-4 flex-wrap" style={{ animationDelay: '0.2s' }}>
                    <span className="text-4xl md:text-6xl lg:text-7xl animate-glow-pulse">🪔</span>
                    <span className="font-bold animate-text-glow" style={{ 
                      textShadow: 'var(--text-shadow-strong)',
                      WebkitTextStroke: '1px hsl(38 92% 50% / 0.3)'
                    }}>
                      दिवाळीच्या प्रकाशात तुमचं मन उजळो,
                    </span>
                  </p>
                  
                  <p className="animate-slide-up font-bold" style={{ 
                    animationDelay: '0.6s',
                    textShadow: 'var(--text-shadow-strong)',
                    WebkitTextStroke: '1px hsl(38 92% 50% / 0.3)'
                  }}>
                    आणि नात्यांमधलं प्रेम नव्यानं फुलो. ✨
                  </p>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-6 md:my-8 animate-glow-pulse" />
                  
                  <p className="animate-slide-up font-bold" style={{ 
                    animationDelay: '1s',
                    textShadow: 'var(--text-shadow-strong)',
                    WebkitTextStroke: '1px hsl(38 92% 50% / 0.3)'
                  }}>
                    या दिवाळीत फक्त घर नाही,
                  </p>
                  
                  <p className="animate-slide-up font-bold" style={{ 
                    animationDelay: '1.4s',
                    textShadow: 'var(--text-shadow-strong)',
                    WebkitTextStroke: '1px hsl(38 92% 50% / 0.3)'
                  }}>
                    तर मनही उजळवू या...
                  </p>
                  
                  <p className="animate-slide-up text-3xl md:text-5xl lg:text-6xl font-bold text-primary animate-text-glow" style={{ 
                    animationDelay: '1.8s',
                    textShadow: '0 0 30px hsl(38 92% 50%), 0 0 60px hsl(38 92% 50% / 0.8), 4px 4px 8px rgba(0,0,0,0.9)',
                    WebkitTextStroke: '2px hsl(38 92% 50% / 0.5)'
                  }}>
                    कारण प्रकाशाचा खरा अर्थ म्हणजे —
                  </p>
                  
                  <p className="animate-slide-up text-4xl md:text-6xl lg:text-7xl font-bold text-accent animate-text-glow" style={{ 
                    animationDelay: '2.2s',
                    textShadow: '0 0 30px hsl(25 95% 61%), 0 0 60px hsl(25 95% 61% / 0.8), 4px 4px 8px rgba(0,0,0,0.9)',
                    WebkitTextStroke: '2px hsl(25 95% 61% / 0.5)'
                  }}>
                    एकमेकांसाठी उजळणं. ❤️
                  </p>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-8 md:my-10 animate-glow-pulse" />
                  
                  <p className="text-4xl md:text-6xl lg:text-8xl font-bold mt-8 animate-slide-up flex items-center justify-center gap-4 md:gap-6 flex-wrap" style={{ animationDelay: '2.6s' }}>
                    <span className="animate-spin text-5xl md:text-7xl lg:text-9xl" style={{ animationDuration: '4s' }}>🌼</span>
                    <span className="text-primary animate-text-glow" style={{ 
                      textShadow: '0 0 40px hsl(38 92% 50%), 0 0 80px hsl(38 92% 50% / 0.8), 6px 6px 12px rgba(0,0,0,0.9)',
                      WebkitTextStroke: '2px hsl(38 92% 50% / 0.5)'
                    }}>
                      शुभ दीपावली!
                    </span>
                    <span className="animate-spin text-5xl md:text-7xl lg:text-9xl" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>🌼</span>
                  </p>
                </div>
              </div>

              {/* Enhanced Signature */}
              <div className="animate-slide-up bg-gradient-to-r from-transparent via-card/40 to-transparent backdrop-blur-md rounded-full p-4 md:p-6" style={{ animationDelay: '3s' }}>
                <p className="text-2xl md:text-4xl lg:text-5xl font-elegant text-primary animate-text-glow font-bold" style={{ textShadow: 'var(--text-shadow-strong)' }}>
                  ✨ — हरिश्चंद्र संभाजी पखाले ✨
                </p>
              </div>
            </div>

            {/* Interactive Diya */}
            <div className="animate-slide-up" style={{ animationDelay: '3.5s' }}>
              <InteractiveDiya />
            </div>

            {/* Ending Message with Fireworks */}
            {showEnding && (
              <div className="mt-12 md:mt-16 animate-zoom-in space-y-6">
                <p className="text-4xl md:text-6xl font-elegant text-primary animate-text-glow">
                  🎆 🎇 🎆
                </p>
                <p className="text-xl md:text-3xl font-elegant text-foreground font-bold" style={{ textShadow: 'var(--text-shadow-strong)' }}>
                  Made with ❤️ for you
                </p>
                <Button
                  onClick={replayAnimation}
                  variant="outline"
                  className="bg-card/80 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 hover:scale-110 font-elegant text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg mt-6"
                >
                  🔄 Replay Animation
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-4">
        <MusicControl />
        <div className="bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 text-sm md:text-base text-foreground font-sans font-semibold shadow-lg">
          Happy Diwali! 🪔
        </div>
      </div>

      {/* Progress indicator */}
      {!showEnding && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {[showIntro, showMain, showEnding].map((active, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                active ? 'w-12 bg-primary' : 'w-8 bg-primary/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
