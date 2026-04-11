import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  return (
    <section
      id='pricing'
      ref={ref}
      className={clsx('ld-fade py-24 px-6', isInView && 'ld-visible')}
    >
      <div className='mx-auto text-center' style={{ maxWidth: '640px' }}>
        <p className='ld-label mb-3'>Pricing</p>
        <h2
          className='text-2xl sm:text-3xl font-semibold mb-8'
          style={{ color: 'var(--ld-text-strong)' }}
        >
          极致性价比
        </h2>

        <div className='ld-glass' style={{ padding: '48px 32px' }}>
          <div className='mb-2'>
            <span className='ld-price-old'>官方价 ¥7/刀</span>
          </div>
          <div className='mb-4'>
            <span className='ld-price'>$0.5</span>
            <span className='text-lg ml-2' style={{ color: 'var(--ld-text-muted)' }}>/ 刀</span>
          </div>
          <p className='text-sm mb-8' style={{ color: 'var(--ld-text-muted)' }}>
            按量付费 · 用多少付多少 · 余额永不过期
          </p>
          <div
            className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs mb-10'
            style={{ color: 'var(--ld-text-muted)' }}
          >
            <span>全部模型可用</span>
            <span>·</span>
            <span>支持支付宝 / 微信</span>
            <span>·</span>
            <span>无月费绑定</span>
          </div>
          <button className='ld-btn ld-btn--primary' onClick={() => navigate('/console')}>
            立即充值 <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
