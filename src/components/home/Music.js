import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserApproved, setHasUserApproved] = useState(false); // Estado para saber si el usuario ha aprobado
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleApproval = () => {
    setHasUserApproved(true);
    audioRef.current.play(); // Empieza a reproducir la canción
    setIsPlaying(true);
  };

  useEffect(() => {
    // No reproducir automáticamente hasta que el usuario haya aprobado
    if (hasUserApproved) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [hasUserApproved]);

  return (
    <div className="music-player-container">
      <audio ref={audioRef} src="/files/song.mp3" loop />

      {!hasUserApproved && (
        <div className="welcome-overlay">
          <div className="welcome-message">
            <h1>¡Bienvenido!</h1>
            <p>Haz clic en el botón para empezar a escuchar música.</p>
            <button onClick={handleApproval}>Reproducir Música</button>
          </div>
        </div>
      )}

      {hasUserApproved && (
        <div className="music-player">
          <button className="play-pause-button" onClick={togglePlayPause}>
            <img
              src={"/icons/music_icon.gif"}
              alt="Music Icon"
              className={`music-icon ${isPlaying ? 'playing' : 'paused'}`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
