import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import clsx from 'clsx';

const StatCard = ({ value, suffix, label, duration }) => {
  const [ref, isInView] = useInView();
  const count = useCountUp(value, duration || 2000, true, isInView);

  return (
    <div ref={ref} className='ld-glass ld-stat'>
      <div className='ld-stat-value'>
        {suffix === 'ms' && '< '}
        {suffix === '%' ? `${count / 100}.${String(count % 100).padStart(2, '0')}` : count}
        {suffix === 'ms' ? 'ms' : suffix === '+' ? '+' : '%'}
      </div>
      <div className='ld-stat-label'>{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className='relative pt-12 pb-8 px-6'>
      <div className='mx-auto' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <div className='text-center mb-16 pt-8'>
          <p className='ld-label mb-4'>Enterprise AI Gateway</p>
          <h1
            className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'
            style={{ color: 'var(--ld-text-strong)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            企业级 AI API 中转站
          </h1>
          <p
            className='text-lg sm:text-xl max-w-2xl mx-auto mb-10'
            style={{ color: 'var(--ld-text)', lineHeight: 1.7 }}
          >
            一站式接入全球主流 AI 模型，超低延迟，端到端加密，
            <br className='hidden sm:block' />
            为你的业务提供安全、稳定、高性价比的 AI 能力
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='ld-btn ld-btn--primary' onClick={() => navigate('/console')}>
              立即接入 <ArrowRight size={16} />
            </button>
            <button className='ld-btn ld-btn--ghost' onClick={() => {
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              查看价格
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
          <StatCard value={100} suffix='ms' label='平均延迟' duration={1500} />
          <StatCard value={9995} suffix='%' label='服务可用性' duration={2000} />
          <StatCard value={5000} suffix='+' label='日活跃用户' duration={2500} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
