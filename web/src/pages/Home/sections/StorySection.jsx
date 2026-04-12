import React from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';

const STEPS = [
  { idx: '01', title: '选择方案', desc: '按量付费, 灵活开始使用.' },
  { idx: '02', title: '安装编程软件', desc: '仅需几分钟, 即可丝滑接入 Claude Code、Cursor 等 20+ 编程工具.' },
  { idx: '03', title: '配置编程工具', desc: '配置 Base URL 及 API Key, 即可快速完成编程工具接入配置.' },
  { idx: '04', title: '开始编码', desc: '完成配置后, 即可在你常用的编程工具中开始编码.' },
];

const StorySection = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="story-section" ref={ref} aria-label="产品说明">
      <div className="story-shell">
        <div className={clsx('story-copy scroll-reveal', isInView && 'is-visible')} style={{ '--reveal-delay': '0ms' }}>
          <p className="story-line">
            无需编程基础, 仅依靠自然语言,<br />就能将您的想法变为现实.
          </p>
          <p className="story-line story-line-emphasis">
            用最简单的配置, 即刻使用稳定、安全、优惠的 AI 编程能力, 体验当前全球最顶级的智能编程工具.
          </p>
        </div>
        <div className="story-steps" aria-label="快速开始 4 步">
          {STEPS.map((s, i) => (
            <div
              key={s.idx}
              className={clsx('story-step-card scroll-reveal', isInView && 'is-visible')}
              style={{ '--reveal-delay': `${70 * (i + 1)}ms` }}
            >
              <div className="story-step-index">{s.idx}</div>
              <h3 className="story-step-title">{s.title}</h3>
              <p className="story-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
