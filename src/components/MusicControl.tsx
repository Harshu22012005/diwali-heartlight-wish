import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MusicControl = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <Button
      onClick={() => setIsMuted(!isMuted)}
      variant="outline"
      size="icon"
      className="bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 hover:scale-110 shadow-lg rounded-full w-12 h-12 md:w-14 md:h-14"
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <Volume2 className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
      )}
    </Button>
  );
};

export default MusicControl;
