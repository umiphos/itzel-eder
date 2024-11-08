import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DateCountdownPage from '../components/home/DateCountdown';
import VIPGuests from '../components/home/VIPGuests'
import Information from '../components/home/Information'
import Guidelines from '../components/home/Guidelines'
import Gift from '../components/home/Gift'
import Logo from '../components/home/Logo'
import BannerA from '../components/home/BannerA'
import BannerB from '../components/home/BannerB'



function HomePage() {
  return (
    <div>
      <Logo />
      <HeroSection />
      <DateCountdownPage targetDate="2024-11-23" />
      <VIPGuests />
      <BannerA />
      <Information />
      <Gift />
      <BannerB />
      <Guidelines />

    </div>
  );
}

export default HomePage;
