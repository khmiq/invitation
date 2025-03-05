import React, { useRef, useEffect, useState } from "react";
import bgMusic from "../assets/audio.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; 
      audioRef.current.play().catch(() => setIsPlaying(false)); // Handle autoplay issues
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4">
      <audio ref={audioRef} src={bgMusic} loop autoPlay />
      <button
        onClick={toggleMusic}
        className="bg-green-700 text-white px-1 py-1 rounded-lg shadow-md hover:bg-green-900 transition flex items-center gap-2"
      >
        {isPlaying ? "Pause 🎵" : "Play ▶️"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
