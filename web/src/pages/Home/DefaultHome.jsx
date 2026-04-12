import React, { useEffect } from 'react';
import './landing.css';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import StepsSection from './sections/StepsSection';
import TrustSection from './sections/TrustSection';

const DefaultHome = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-landing', '');
    return () => {
      document.documentElement.removeAttribute('data-landing');
    };
  }, []);

  return (
    <div className='ld-root'>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <StepsSection />
      <TrustSection />
    </div>
  );
};

export default DefaultHome;
