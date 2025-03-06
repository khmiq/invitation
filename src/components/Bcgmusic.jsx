import React, { useEffect, useRef, useState } from "react";
import bgMusic from "../assets/audio.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        try {
          await audioRef.current.play();
        } catch (err) {
          console.warn("Autoplay blocked, waiting for interaction...");
        }
      }
    };

    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("scroll", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("scroll", playAudio);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.warn("Error playing:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center gap-2">
      <audio ref={audioRef} src={bgMusic} loop />
      <button
        onClick={toggleMusic}
        className="bg-green-700 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-900 transition"
      >
        {isPlaying ? "Pause 🎵" : "Play ▶️"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
