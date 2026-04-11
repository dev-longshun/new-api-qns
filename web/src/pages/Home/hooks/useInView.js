import { useRef, useState, useEffect } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollRoot = null;
    let parent = el.parentElement;
    while (parent) {
      const style = getComputedStyle(parent);
      const ov = style.overflow + style.overflowY;
      if (ov.includes('auto') || ov.includes('scroll')) {
        scrollRoot = parent;
        break;
      }
      parent = parent.parentElement;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { root: scrollRoot, threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};
