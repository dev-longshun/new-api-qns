import React from 'react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';

const FAQS = [
  {
    question: '支持哪些编程工具?',
    answer: '当前支持 Claude Code, Codex, Gemini CLI, OpenCode, OpenClaw, Cursor, Cline, Aider, Cherry Studio, Continue 等 20+ 编程工具.',
  },
  {
    question: '如何获取 API Key?',
    answer: '进入控制台创建密钥即可. 拿到 API Key 后, 配合 Base URL 填入你正在使用的编程工具.',
  },
  {
    question: '按量付费怎么用?',
    answer: '充值后按实际消耗扣费, 余额永不过期. $0.5/刀, 用多少付多少.',
  },
];

const FAQ_LINKS = [
  { question: '术语名词', answer: '在接入和使用过程中会经常看到一些陌生的名词, 可直接查看术语解释.', action: '查看术语解释', href: 'https://www.qnsapi.com/doc/terms' },
  { question: '联系我们', answer: '遇到接入或使用问题, 可加入交流群获取支持.', action: '联系我们', href: 'https://www.qnsapi.com/contact' },
  { question: '更多问题', answer: '如果这里没有覆盖你的问题, 可以继续查看完整 FAQ 文档.', action: '查看 FAQ', href: 'https://www.qnsapi.com/doc/faq' },
];

const FAQSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="faq-section" ref={ref} aria-label="常见问题">
      <div className="faq-shell">
        <div className={clsx('faq-head scroll-reveal', isInView && 'is-visible')} style={{ '--reveal-delay': '0ms' }}>
          <h2 className="faq-title">常见问题</h2>
        </div>
        <div className="faq-grid">
          {FAQS.map((faq, i) => (
            <article
              key={faq.question}
              className={clsx('faq-card scroll-reveal', isInView && 'is-visible')}
              style={{ '--reveal-delay': `${70 * (i + 1)}ms` }}
            >
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </article>
          ))}
          {FAQ_LINKS.map((faq, i) => (
            <a
              key={faq.question}
              className={clsx('faq-card faq-card-link scroll-reveal', isInView && 'is-visible')}
              href={faq.href}
              target="_blank"
              rel="noreferrer"
              style={{ '--reveal-delay': `${70 * (FAQS.length + i + 1)}ms` }}
            >
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
              <span className="faq-link-action">{faq.action}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
