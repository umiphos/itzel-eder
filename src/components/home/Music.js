import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserApproved, setHasUserApproved] = useState(false); // Controla si el usuario ha aprobado
  const audioRef = useRef(null);

  // Función para alternar play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.error("Error en la reproducción:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Función para manejar la aprobación del usuario
  const handleApproval = () => {
    setHasUserApproved(true);
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(error => {
        console.error("Error al intentar reproducir:", error);
      });
    }
    setIsPlaying(true);
  };

  useEffect(() => {
    // Evitar la reproducción automática hasta que el usuario haya dado su aprobación
    if (hasUserApproved && audioRef.current) {
      const audio = audioRef.current;
      audio.play().catch(error => {
        console.error("Error al intentar reproducir:", error);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasUserApproved]); // Solo reproducir después de la aprobación

  return (
    <div className="music-player-container">
      <audio ref={audioRef} src="/files/song.mp3" loop />

      {/* Capa de bienvenida que bloquea la interacción */}
      {!hasUserApproved && (
        <div className="welcome-overlay">
          <div className="welcome-message">
            <h1>¡Bienvenido!</h1>
            <p>Haz clic en el botón para empezar a escuchar música.</p>
            <button onClick={handleApproval}>Reproducir Música</button>
          </div>
        </div>
      )}

      {/* Mostrar el botón de música solo si el usuario ha aprobado */}
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
