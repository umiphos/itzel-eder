import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Opcional: Autoplay cuando el componente se monta
     audioRef.current.play();
     setIsPlaying(true);

    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/files/song.mp3" loop autoPlay/>
      <button className="play-pause-button" onClick={togglePlayPause}>
        <img
          src={"/icons/music_icon.gif"}
          alt="Music Icon"
          className={`music-icon ${isPlaying ? 'playing' : 'paused'}`}
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
