import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesPage from '../pages/ServicesPage';
import Gallery from '../components/Gallery';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesPage />
      <Gallery />
    </div>
  );
}

export default HomePage;
