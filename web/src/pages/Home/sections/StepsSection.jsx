import React from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';

const STEPS = [
  { num: '1', title: '注册账号', desc: '30 秒完成注册，即刻获取 API 密钥' },
  { num: '2', title: '充值余额', desc: '支付宝 / 微信扫码，最低 1 元起充' },
  { num: '3', title: '配置工具', desc: '设置 Base URL 和 API Key，一行搞定' },
  { num: '4', title: '开始使用', desc: '接入 Claude Code、Cursor 等 AI 工具' },
];

const StepsSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={clsx('ld-fade py-24 px-6', isInView && 'ld-visible')}
    >
      <div className='mx-auto' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <p className='ld-label text-center mb-3'>Quick Start</p>
        <h2
          className='text-2xl sm:text-3xl font-semibold text-center mb-4'
          style={{ color: 'var(--ld-text-strong)' }}
        >
          4 步开始使用
        </h2>
        <p className='text-sm text-center mb-14' style={{ color: 'var(--ld-text-muted)' }}>
          从注册到接入，最快 3 分钟完成
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {STEPS.map((s) => (
            <div key={s.num} className='ld-glass flex flex-col gap-4' style={{ padding: '28px' }}>
              <div className='ld-step-num'>{s.num}</div>
              <h3
                className='text-base font-semibold'
                style={{ color: 'var(--ld-text-strong)' }}
              >
                {s.title}
              </h3>
              <p className='text-sm leading-relaxed' style={{ color: 'var(--ld-text-muted)' }}>
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
