import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a royalty-free birthday tune placeholder
  // In production, replace with actual audio file
  const audioSrc = "/audio/countonme.mp3";

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-card shadow-card border border-border hover:shadow-glow transition-all duration-300 group"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Play Music
            </span>
          </>
        ) : (
          <>
            <Volume2 className="w-5 h-5 text-primary animate-pulse" />
            <Music className="w-4 h-4 text-primary animate-bounce-soft" />
          </>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
