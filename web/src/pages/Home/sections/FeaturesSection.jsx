import React from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';

const FEATURES = [
  {
    title: '全模型接入',
    desc: '一个 API 接入 OpenAI、Claude、Gemini、DeepSeek 等主流模型，无需分别对接。',
  },
  {
    title: '超低延迟',
    desc: '全球多节点智能路由，平均响应时间低于 100ms，体验接近直连。',
  },
  {
    title: '高可用架构',
    desc: '多线路冗余热备，自动故障切换，99.95% SLA 保障业务连续性。',
  },
  {
    title: '端到端加密',
    desc: 'TLS 1.3 全链路加密传输，数据不落盘不留存，满足企业安全合规要求。',
  },
  {
    title: '零日志策略',
    desc: '请求内容不记录、不分析、不存储。你的数据只属于你，隐私保护到底。',
  },
  {
    title: '全天候防护',
    desc: 'DDoS / CC 攻击实时拦截，WAF 智能防护，7×24 小时安全运营。',
  },
];

const FeaturesSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={clsx('ld-fade py-20 sm:py-24 px-6', isInView && 'ld-visible')}
    >
      <div className='mx-auto' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <div className='text-center mb-14'>
          <p className='ld-label mb-3'>核心优势</p>
          <h2
            className='text-2xl sm:text-3xl font-bold'
            style={{ color: 'var(--ld-text)', letterSpacing: '-0.02em' }}
          >
            为什么选择我们
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {FEATURES.map((f, i) => (
            <div key={i} className='ld-card'>
              <h3
                className='text-base font-semibold mb-2'
                style={{ color: 'var(--ld-text)' }}
              >
                {f.title}
              </h3>
              <p className='text-sm leading-relaxed' style={{ color: 'var(--ld-text-secondary)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
