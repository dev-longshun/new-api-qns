import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const CTASection = () => {
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  return (
    <section className="cta-section" ref={ref} aria-label="底部行动区">
      <div className={clsx('cta-shell scroll-reveal', isInView && 'is-visible')} style={{ '--reveal-delay': '0ms' }}>
        <div className="cta-copy">
          <h2 className="cta-title">开始体验当前全球最顶级模型</h2>
        </div>
        <div className="cta-actions">
          <a className="hero-button hero-button-primary" href="/console" onClick={(e) => { e.preventDefault(); navigate('/console'); }}>立即接入</a>
          <a className="hero-button hero-button-secondary" href="/console/token" onClick={(e) => { e.preventDefault(); navigate('/console/token'); }}>获取 ApiKey</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
