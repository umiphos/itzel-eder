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




function DateCountdownPage({ targetDate }) {
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
<section className="invite-section">
  <div className="content-container">
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="icon-image"/>
    <h2>Estas invitado</h2>
    <b>El 23 de Noviembre, 2024</b>
    <br />
    <b>Itzel Aguilar &amp; Eder Gálvez</b>
    <br />
  </div>
  <h2>Tiempo restante:</h2>
  <p>{timeRemaining.days} días, {timeRemaining.hours} horas, {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos</p>
</section>
);}

export default DateCountdownPage;
