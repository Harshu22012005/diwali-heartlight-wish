import { useEffect, useState } from 'react';
import harishchandraImage from '@/assets/harishchandra.jpg';
import fireworksImage from '@/assets/fireworks.jpg';
import FloatingDiya from '@/components/FloatingDiya';
import Sparkle from '@/components/Sparkle';
import InteractiveDiya from '@/components/InteractiveDiya';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowMain(true);
    }, 4000);

    const endingTimer = setTimeout(() => {
      setShowEnding(true);
    }, 8000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(endingTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-[hsl(258_50%_20%)] to-[hsl(38_80%_30%)] flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Diyas */}
        {[...Array(8)].map((_, i) => (
          <FloatingDiya key={`diya-${i}`} delay={i * 0.5} duration={4 + i * 0.3} />
        ))}
        
        {/* Sparkles */}
        {[...Array(30)].map((_, i) => (
          <Sparkle key={`sparkle-${i}`} delay={i * 0.3} />
        ))}
      </div>

      {/* Fireworks Background (Ending) */}
      {showEnding && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in"
          style={{
            backgroundImage: `url(${fireworksImage})`,
            animationDelay: '0.5s',
          }}
        />
      )}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Intro Animation */}
        {showIntro && (
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-elegant text-foreground mb-4 animate-glow-pulse">
              When lights meet hearts...
            </h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-elegant text-primary animate-fade-in-delay">
              a new Diwali begins. 💛
            </p>
          </div>
        )}

        {/* Main Content */}
        {showMain && (
          <div className="text-center space-y-8 md:space-y-12 animate-fade-in">
            {/* Harishchandra's Photo with Glow */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-glow-pulse" />
                <img
                  src={harishchandraImage}
                  alt="Harishchandra Sambhaji Pakhale"
                  className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{
                    boxShadow: '0 0 60px hsl(38 92% 50% / 0.6), 0 0 100px hsl(25 95% 61% / 0.4)',
                  }}
                />
              </div>
            </div>

            {/* Marathi Message */}
            <div className="space-y-6 md:space-y-8 px-4">
              <div className="inline-block bg-card/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl">
                <div className="text-2xl md:text-4xl lg:text-5xl font-marathi text-foreground leading-relaxed space-y-4">
                  <p className="animate-fade-in flex items-center justify-center gap-3">
                    <span className="text-3xl md:text-5xl">🪔</span>
                    <span>दिवाळीच्या प्रकाशात तुमचं मन उजळो,</span>
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    आणि नात्यांमधलं प्रेम नव्यानं फुलो. ✨
                  </p>
                  <p className="animate-fade-in mt-6" style={{ animationDelay: '1s' }}>
                    या दिवाळीत फक्त घर नाही, तर मनही उजळवू या...
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    कारण प्रकाशाचा खरा अर्थ म्हणजे —
                  </p>
                  <p className="animate-fade-in text-primary font-bold" style={{ animationDelay: '2s' }}>
                    एकमेकांसाठी उजळणं. ❤️
                  </p>
                  <p className="text-3xl md:text-5xl font-bold mt-8 animate-fade-in flex items-center justify-center gap-3" style={{ animationDelay: '2.5s' }}>
                    <span>🌼</span>
                    <span className="text-primary">शुभ दीपावली!</span>
                    <span>🌼</span>
                  </p>
                </div>
              </div>

              {/* Signature */}
              <p className="text-xl md:text-3xl font-elegant text-primary animate-fade-in" style={{ animationDelay: '3s' }}>
                ✨ — हरिश्चंद्र संभाजी पखाले ✨
              </p>
            </div>

            {/* Interactive Diya */}
            <div className="animate-fade-in" style={{ animationDelay: '3.5s' }}>
              <InteractiveDiya />
            </div>

            {/* Ending Message */}
            {showEnding && (
              <div className="mt-12 md:mt-16 animate-fade-in space-y-4">
                <p className="text-2xl md:text-4xl font-elegant text-foreground">
                  🎆
                </p>
                <p className="text-lg md:text-2xl font-sans text-muted-foreground">
                  Made with ❤️ for you
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Audio Control (Optional - users can add their own audio file) */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 text-sm text-muted-foreground font-sans">
          Happy Diwali! 🪔
        </div>
      </div>
    </div>
  );
};

export default Index;
