import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/diwali-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      className="bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95 transition-all duration-500 hover:scale-110 shadow-lg rounded-full w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 min-h-[44px] min-w-[44px] touch-manipulation"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {!isPlaying ? (
        <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <Volume2 className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
      )}
    </Button>
  );
};

export default MusicControl;
