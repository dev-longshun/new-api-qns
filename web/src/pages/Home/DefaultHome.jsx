import React, { useEffect } from 'react';
import './landing.css';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import StepsSection from './sections/StepsSection';
import TrustSection from './sections/TrustSection';

const DefaultHome = () => {
  useEffect(() => {
    const root = document.querySelector('.ld-root');
    if (!root) return;

    let scrollContainer = null;
    let parent = root.parentElement;
    while (parent) {
      const style = getComputedStyle(parent);
      const ov = style.overflow + style.overflowY;
      if (ov.includes('auto') || ov.includes('scroll')) {
        scrollContainer = parent;
        break;
      }
      parent = parent.parentElement;
    }

    if (scrollContainer) {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.style.WebkitOverflowScrolling = 'touch';
      scrollContainer.scrollTop = 0;
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.style.scrollBehavior = '';
      }
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
