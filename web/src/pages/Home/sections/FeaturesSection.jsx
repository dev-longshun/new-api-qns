import React from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';
import { Zap, Shield, Globe, Lock, EyeOff, ServerCrash } from 'lucide-react';

const FEATURES = [
  {
    icon: Globe,
    title: '企业级 API 中转',
    desc: '统一接入 OpenAI、Claude、Gemini 等全球主流模型，一个 Key 搞定所有',
  },
  {
    icon: Zap,
    title: '< 100ms 超低延迟',
    desc: '全球多节点智能路由，自动选择最优链路，响应快人一步',
  },
  {
    icon: ServerCrash,
    title: '99.95% 高可用',
    desc: '多线路冗余热备，自动故障切换，业务永不中断',
  },
  {
    icon: Lock,
    title: 'TLS 1.3 端到端加密',
    desc: '全链路传输加密，数据不落盘不留存，安全合规无忧',
  },
  {
    icon: EyeOff,
    title: '数据私密化',
    desc: '零日志策略，请求内容不记录不分析，你的数据只属于你',
  },
  {
    icon: Shield,
    title: '24/7 全天候防护',
    desc: 'DDoS / CC 全链路防攻击，WAF 智能拦截，安全无死角',
  },
];

const FeaturesSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={clsx('ld-fade py-24 px-6', isInView && 'ld-visible')}
    >
      <div className='mx-auto' style={{ maxWidth: 'var(--ld-max-w)' }}>
        <p className='ld-label text-center mb-3'>Core Advantages</p>
        <h2
          className='text-2xl sm:text-3xl font-semibold text-center mb-4'
          style={{ color: 'var(--ld-text-strong)' }}
        >
          为什么选择我们
        </h2>
        <p className='text-sm text-center mb-14' style={{ color: 'var(--ld-text-muted)' }}>
          安全、稳定、快速 — 企业级基础设施为你的 AI 应用保驾护航
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {FEATURES.map((f, i) => (
            <div key={i} className='ld-glass' style={{ padding: '28px' }}>
              <div className='ld-feat-icon'>
                <f.icon size={22} />
              </div>
              <h3
                className='text-base font-semibold mb-2'
                style={{ color: 'var(--ld-text-strong)' }}
              >
                {f.title}
              </h3>
              <p className='text-sm leading-relaxed' style={{ color: 'var(--ld-text-muted)' }}>
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
