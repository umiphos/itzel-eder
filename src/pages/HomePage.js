import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PhraseDateCountdownPage from '../components/home/PhraseDateCountdown';
import Gallery from '../components/home/Gallery';
import VIPGuests from '../components/home/VIPGuests'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <PhraseDateCountdownPage />
      <VIPGuests />
      <Gallery />
    </div>
  );
}

export default HomePage;
