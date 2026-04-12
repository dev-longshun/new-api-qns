import React, { useEffect } from 'react';
import './landing.css';
import HeroSection from './sections/HeroSection';
import StorySection from './sections/StorySection';
import PricingSection from './sections/PricingSection';
import CTASection from './sections/CTASection';
import FAQSection from './sections/FAQSection';

const DefaultHome = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-landing', '');
    document.documentElement.setAttribute('data-theme', 'dark');
    return () => {
      document.documentElement.removeAttribute('data-landing');
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className="page">
      <HeroSection />
      <StorySection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default DefaultHome;
