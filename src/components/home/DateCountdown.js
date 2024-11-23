import React, { useState, useEffect } from 'react';

function DateCountdownPage({ targetDate}) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

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
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [targetDate]);

  return (
<section className="countdown-section">
  <div className="countdown-container">
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="countdown-icon-image"/>
    {timeRemaining.days < 0 ? (
          <p><strong>¡El evento ha comenzado!</strong></p>
        ) : (
          <strong>
            <p>
              {timeRemaining.days} días, {timeRemaining.hours} horas, {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos
            </p>
          </strong>
        )}
    <p>Nos emociona compartir este momento tan especial, por eso, queremos invitarte a ser parte de nuestra historia y celebrar juntos el amor y la alegría que nos une. Será un día lleno de magia y significado, y no sería lo mismo sin tu presencia. ¡Acompáñanos en este nuevo capítulo de nuestras vidas!</p>
    <b>23 de Noviembre de 2024</b>
    <br />
    <b>Itzel &amp; Eder</b>
    <br />
  </div>
</section>
);}

export default DateCountdownPage;
