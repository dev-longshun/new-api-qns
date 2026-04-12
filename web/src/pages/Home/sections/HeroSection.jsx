import React, { useEffect, useRef, useState, useCallback } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { showSuccess } from '../../../helpers';
import { useTranslation } from 'react-i18next';

const MODELS = [
  'claude-opus-4.6', 'claude-sonnet-4.6', 'claude-opus-4.5',
  'gpt-5.4', 'gpt-5.4-mini', 'gpt-5.3-codex',
  'gemini-3.1-pro', 'gemini-3-flash', 'gemini-2.5-pro',
];

const TOOLS = [
  'Claude Code', 'Codex', 'Gemini CLI', 'OpenCode', 'OpenClaw',
  'Cursor', 'Cline', 'Roo Code', 'Aider', 'Cherry Studio', 'Continue',
];

const PATHS = ['v1', 'v1/chat/completions', 'v1/models', 'v1/embeddings'];
const AGENTS = ['claude', 'cursor', 'aider', 'cline', 'codex'];

const Marquee = ({ items, label, className, speed = '22s' }) => (
  <div className={clsx('intro-reveal is-visible', className)} style={{ '--reveal-delay': '260ms' }}>
    <div className={`${className}-label`}>{label}</div>
    <div className={`${className.replace('-support', '-marquee')}`}>
      <div
        className={className.includes('model') ? 'model-list' : className.includes('tool') ? 'tool-list' : 'status-list'}
        style={{ animationDuration: speed }}
      >
        {[0, 1].map((g) => (
          <div key={g} className={className.includes('model') ? 'model-group' : 'tool-group'} aria-hidden={g > 0}>
            {items.map((item) => (
              <span key={`${g}-${item}`} className="tool-chip">{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const pathRef = useRef(null);
  const agentRef = useRef(null);

  useEffect(() => { setVisible(true); }, []);

  // Typewriter effect for path
  useTypedLoop(pathRef, PATHS, 2000, 80);
  // Typewriter effect for agent
  useTypedLoop(agentRef, AGENTS, 2500, 100);

  const copyBaseUrl = useCallback(() => {
    navigator.clipboard.writeText('https://www.qnsapi.com');
    showSuccess(t('复制成功'));
  }, [t]);

  return (
    <main className="hero" aria-label="首页主视觉">
      <div className="hero-shell">
        <section className={clsx('hero-copy intro-reveal', visible && 'is-visible')} style={{ '--reveal-delay': '40ms' }}>
          <h1 className="hero-title">Qns API</h1>
          <p className="hero-subtitle">企业级 AI 中转站</p>
          <div className="hero-actions" aria-label="快捷入口">
            <a className="hero-button hero-button-primary" href="/console" onClick={(e) => { e.preventDefault(); navigate('/console'); }}>快速接入</a>
            <a className="hero-button hero-button-secondary hero-button-secondary-strong" href={localStorage.getItem('docs_link') || 'https://www.qnsapi.com/doc'} target="_blank" rel="noreferrer">文档中心</a>
          </div>

          <Marquee items={MODELS} label="支持全球主流模型" className="model-support" speed="22s" />
          <Marquee items={TOOLS} label="丝滑接入 20+ 编程工具" className="tool-support" speed="22s" />
        </section>

        <div className={clsx('hero-aside intro-reveal', visible && 'is-visible')} style={{ '--reveal-delay': '150ms' }}>
          <section className="access-panel" aria-label="基础链接">
            <div className="access-panel-head">
              <div className="panel-dots" aria-hidden="true">
                <span className="panel-dot is-live" />
                <span className="panel-dot" />
                <span className="panel-dot" />
              </div>
              <div className="panel-kicker">qnsapi.sh</div>
            </div>
            <div className="terminal-body" aria-label="基础链接与路径格式提示">
              <div className="terminal-line terminal-comment"># 替换基础链接</div>
              <div className="terminal-line terminal-command">
                <span className="terminal-prompt">$</span>
                <span className="terminal-key">BASE_URL =</span>
                <span className="terminal-scroll">
                  <span className="terminal-value">
                    <span>https://www.qnsapi.com</span>
                    <span className="terminal-path" aria-hidden="true">
                      <span className="path-slash">/</span>
                      <span ref={pathRef}>v1</span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="terminal-line terminal-comment"># 替换 ApiKey</div>
              <div className="terminal-line terminal-command">
                <span className="terminal-prompt">$</span>
                <span className="terminal-key">API_KEY =</span>
                <span className="terminal-value">"******"</span>
              </div>
              <div className="terminal-line terminal-comment"># 启动 Agent</div>
              <div className="terminal-line terminal-command terminal-command-agent">
                <span className="terminal-prompt">$</span>
                <span className="terminal-scroll">
                  <span className="terminal-value">
                    <span ref={agentRef}>claude</span>
                    <span className="typed-cursor" />
                  </span>
                </span>
              </div>
            </div>
            <div className="terminal-panel-footer">
              <div className="copy-row">
                <button className="copy-button" type="button" onClick={copyBaseUrl}>复制基础链接</button>
                <a className="copy-button copy-button-secondary" href="/console/token" onClick={(e) => { e.preventDefault(); navigate('/console/token'); }}>获取 ApiKey</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

function useTypedLoop(ref, words, pause = 2000, typeSpeed = 80) {
  useEffect(() => {
    if (!ref.current) return;
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const el = ref.current;
      if (!el) return;
      const word = words[idx];

      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIdx--;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % words.length;
          timer = setTimeout(tick, typeSpeed * 2);
          return;
        }
        timer = setTimeout(tick, typeSpeed / 2);
      }
    };

    timer = setTimeout(tick, pause);
    return () => clearTimeout(timer);
  }, [ref, words, pause, typeSpeed]);
}

export default HeroSection;
