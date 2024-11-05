import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PhraseDateCountdownPage from '../components/home/PhraseDateCountdown';
import Gallery from '../components/home/Gallery';
import VIPGuests from '../components/home/VIPGuests'
import Information from '../components/home/Information'
import Guidelines from '../components/home/Guidelines'
import Gift from '../components/home/Gift'


function HomePage() {
  return (
    <div>
      <HeroSection />
      <PhraseDateCountdownPage />
      <VIPGuests />
      <Information />
      <Guidelines />
      <Gift />
    </div>
  );
}

export default HomePage;
