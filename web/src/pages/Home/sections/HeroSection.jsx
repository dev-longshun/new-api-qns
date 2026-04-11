import React from 'react';
import { useNavigate } from 'react-router-dom';

const STATS = [
  { value: '< 100ms', label: '平均延迟' },
  { value: '99.95%', label: '服务可用性' },
  { value: '5,000+', label: '日活跃用户' },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className='py-20 sm:py-28 px-6'>
      <div className='mx-auto' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <div className='max-w-2xl mb-16'>
          <h1
            className='text-4xl sm:text-5xl font-bold mb-5'
            style={{ color: 'var(--ld-text)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            为你的 AI 应用
            <br />
            提供稳定可靠的 API
          </h1>
          <p
            className='text-lg mb-8'
            style={{ color: 'var(--ld-text-secondary)', lineHeight: 1.7 }}
          >
            企业级 AI API 中转服务。一个接口接入 OpenAI、Claude、Gemini 等主流模型，
            端到端加密，零日志策略，按量付费。
          </p>
          <div className='flex flex-wrap gap-3'>
            <button className='ld-btn ld-btn--primary' onClick={() => navigate('/console')}>
              立即接入
            </button>
            <button className='ld-btn ld-btn--secondary' onClick={() => {
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              查看价格
            </button>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-8 pt-8' style={{ borderTop: '1px solid var(--ld-border)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div className='ld-stat-value'>{s.value}</div>
              <div className='ld-stat-label'>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
