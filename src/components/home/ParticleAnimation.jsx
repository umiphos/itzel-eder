import React from 'react';
import Particles from 'react-particles';

const ParticleAnimation = () => {
  return (
    <Particles
      options={{
        preset: "fireworks",  // Puedes cambiar el preset según lo que desees
        fullScreen: false,    // No ocupa toda la pantalla, solo la sección
        style: { width: "100%", height: "100%" }, // Ocupa toda la sección
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          life: {
            duration: 5,
          },
          move: {
            speed: 0.5,
            outModes: {
              default: "bounce",
            },
          },
          opacity: {
            value: 1,
          },
        },
        background: {
          color: "transparent", // Fondo transparente
        },
        fpsLimit: 60,
        detectRetina: true,
      }}
    />
  );
};

export default ParticleAnimation;
