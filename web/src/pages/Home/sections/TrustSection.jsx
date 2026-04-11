import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const TrustSection = () => {
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className={clsx('ld-fade py-20 sm:py-24 px-6', isInView && 'ld-visible')}
      style={{ borderTop: '1px solid var(--ld-border)' }}
    >
      <div className='mx-auto text-center' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <h2
          className='text-2xl sm:text-3xl font-bold mb-3'
          style={{ color: 'var(--ld-text)' }}
        >
          准备好了吗？
        </h2>
        <p className='text-sm mb-8' style={{ color: 'var(--ld-text-secondary)' }}>
          3 分钟接入，开始使用全球主流 AI 模型
        </p>
        <button className='ld-btn ld-btn--primary' onClick={() => navigate('/console')}>
          免费开始
        </button>
      </div>
    </section>
  );
};

export default TrustSection;
