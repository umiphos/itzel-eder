import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PhraseDateCountdownPage from '../components/home/PhraseDateCountdown';
import Gallery from '../components/home/Gallery';
import VIPGuests from '../components/home/VIPGuests'
import Information from '../components/home/Information'
import Guidelines from '../components/home/Guidelines'
import Gift from '../components/home/Gift'
import Logo from '../components/home/Logo'



function HomePage() {
  return (
    <div>
      <Logo />
      <HeroSection />
      <PhraseDateCountdownPage targetDate="2024-11-23" />
      <VIPGuests />
      <Information />
      <Guidelines />
      <Gift />
    </div>
  );
}

export default HomePage;
