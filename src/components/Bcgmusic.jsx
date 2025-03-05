import React, { useEffect, useRef } from "react";
import bgMusic from "../assets/audio.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

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

  return <audio ref={audioRef} src={bgMusic} loop />;
};

export default BackgroundMusic;


