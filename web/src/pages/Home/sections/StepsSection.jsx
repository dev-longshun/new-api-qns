import React from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';

const STEPS = [
  { num: '1', title: '注册账号', desc: '30 秒完成，即刻获取密钥' },
  { num: '2', title: '充值余额', desc: '支付宝 / 微信，1 元起充' },
  { num: '3', title: '配置接入', desc: '设置 Base URL 和 Key' },
  { num: '4', title: '开始使用', desc: '接入 Cursor、Claude Code 等工具' },
];

const StepsSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={clsx('ld-fade py-20 sm:py-24 px-6', isInView && 'ld-visible')}
    >
      <div className='mx-auto' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <div className='text-center mb-14'>
          <p className='ld-label mb-3'>快速开始</p>
          <h2
            className='text-2xl sm:text-3xl font-bold'
            style={{ color: 'var(--ld-text)', letterSpacing: '-0.02em' }}
          >
            3 分钟完成接入
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {STEPS.map((s) => (
            <div key={s.num} className='ld-card flex flex-col gap-3'>
              <div className='ld-step-num'>{s.num}</div>
              <h3 className='text-base font-semibold' style={{ color: 'var(--ld-text)' }}>
                {s.title}
              </h3>
              <p className='text-sm' style={{ color: 'var(--ld-text-secondary)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
