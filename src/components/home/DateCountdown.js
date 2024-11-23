import React, { useState, useEffect, memo } from 'react';
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function DateCountdownPage({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [particlesInit, setParticlesInit] = useState(null);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 10000); // Actualiza cada 10 segundos en lugar de cada segundo

    return () => clearInterval(interval);
  }, [targetDate]);

  // Cargar la configuración de fuegos artificiales
  const initializeFireworks = async (engine) => {
    await loadFireworksPreset(engine);
    setParticlesInit(engine);
  };

  const eventStarted = timeRemaining.days < 0;

  // Memorizar el componente Particles para evitar re-renderizaciones innecesarias
  const MemoizedParticles = memo(() => (
    <Particles
      init={initializeFireworks}
      options={{
        preset: "fireworks",
        fullScreen: false,
        style: { width: "100%", height: "100%" },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: false,
          },
        },
        particles: {
          number: {
            value: 1,
          },
          density: {
            enable: true,
            area: 600, // Aumenta el área de emisión si es necesario
          },
          life: {
            duration: 5,
            delay: 0,
          },
          move: {
            speed: 15, // Mueve las partículas más lentamente
            outModes: { default: "destroy" }, // Rebote en los bordes
          },
          opacity: { value: 0 }, // Asegura que las partículas sean totalmente visibles
        },
        fpsLimit: 120, // Limita los FPS para un mejor control
      }}
    />
  ));

  return (
    <section className="countdown-section">
      <div className="countdown-container" style={{ position: "relative" }}>
        <img src="/icons/flowers_division.png" alt="Icono de flores" className="countdown-icon-image" />
        {eventStarted ? (
          <>
            <h1><strong>¡El evento ha comenzado!</strong></h1>
            <div
              className="fireworks-container"
              background="white"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            >
              <MemoizedParticles />
            </div>
          </>
        ) : (
          <strong>
            <p>
              {timeRemaining.days} días, {timeRemaining.hours} horas, {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos
            </p>
          </strong>
        )}
        <p>
          Nos emociona compartir este momento tan especial, por eso, queremos invitarte a ser parte de nuestra historia y celebrar juntos el amor y la alegría que nos une. Será un día lleno de magia y significado, y no sería lo mismo sin tu presencia. ¡Acompáñanos en este nuevo capítulo de nuestras vidas!
        </p>
        <b>23 de Noviembre de 2024</b>
        <br />
        <b>Itzel &amp; Eder</b>
        <br />
      </div>
    </section>
  );
}

export default DateCountdownPage;
