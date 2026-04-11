import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const PricingSection = () => {
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  return (
    <section
      id='pricing'
      ref={ref}
      className={clsx('ld-fade ld-price-section py-20 sm:py-24 px-6', isInView && 'ld-visible')}
    >
      <div className='mx-auto text-center' style={{ maxWidth: '560px' }}>
        <p className='ld-label mb-3'>价格</p>
        <h2
          className='text-2xl sm:text-3xl font-bold mb-10'
          style={{ color: 'var(--ld-text)', letterSpacing: '-0.02em' }}
        >
          简单透明，按量付费
        </h2>

        <div className='ld-card' style={{ padding: '48px 32px' }}>
          <div className='mb-2'>
            <span className='ld-price-old'>官方价 ¥7/刀</span>
          </div>
          <div className='mb-5'>
            <span className='ld-price-value'>$0.5</span>
            <span className='text-lg ml-1' style={{ color: 'var(--ld-text-muted)' }}>/刀</span>
          </div>
          <p className='text-sm mb-8' style={{ color: 'var(--ld-text-secondary)' }}>
            用多少付多少 · 余额永不过期 · 全部模型可用
          </p>
          <button className='ld-btn ld-btn--primary' onClick={() => navigate('/console')}>
            立即充值
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
