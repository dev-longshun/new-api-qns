import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const PricingSection = () => {
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  return (
    <section className="pricing-section" ref={ref} id="pricing" aria-label="价格方案">
      <div className="pricing-shell">
        <div className={clsx('pricing-head scroll-reveal', isInView && 'is-visible')} style={{ '--reveal-delay': '0ms' }}>
          <h2 className="pricing-title">价格方案</h2>
        </div>
        <div className="pricing-grid">
          <article className={clsx('pricing-card scroll-reveal', isInView && 'is-visible')} style={{ '--reveal-delay': '70ms' }}>
            <div className="pricing-card-head">
              <h3 className="pricing-name">按量付费</h3>
            </div>
            <div className="pricing-old">官方价 ¥7/刀</div>
            <div className="pricing-price-row">
              <div className="pricing-price">$0.5</div>
              <div className="pricing-price-unit">/刀</div>
            </div>
            <div className="pricing-brief">用多少付多少 · 余额永不过期 · 全部模型可用</div>
            <div className="pricing-card-actions">
              <button className="pricing-action-button" type="button" onClick={() => navigate('/console')}>
                立即充值
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
