import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
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
  }, [targetDate]);

  if (timeRemaining.days < 0) {
    return <div>¡El evento ha comenzado!</div>;
  }
};




function PhraseDateCountdownPage({ targetDate }) {
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
  }, [targetDate]);

  if (timeRemaining.days < 0) {
    return <div>¡El evento ha comenzado!</div>;
  }

  return (
    <section className='phrase-date-countdown-section'>
      <div data-bottom="opacity:0" data-center="opacity:1" className="div-container">
        <h2>Estas invitado</h2>
        <div>

          <img src='/icons/bullet_blue.png' className="imagen-icon" />
        </div>
        El 23 de Noviembre, 2024
        <br />
        <b>Itzel Aguilar &amp; Eder Gálvez</b>
        <br />
        <div className="double_arrow"></div>
      </div>
      <h2>Tiempo restante:</h2>
      <p>{timeRemaining.days} días, {timeRemaining.hours} horas, {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos</p>
    </section>
  );
}
export default PhraseDateCountdownPage;
