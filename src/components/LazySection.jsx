import { useState, useEffect, useRef, Suspense } from 'react';
import SectionSkeleton from './SectionSkeleton';

export default function LazySection({ children, height = '300px' }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleForceLoad = () => setVisible(true);
    window.addEventListener("force-lazy-load", handleForceLoad);

    // High-performance SEO protection guard: Detect search bots or performance auditors
    const isBot = typeof navigator !== 'undefined' && 
      /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|lighthouse|headless/i.test(navigator.userAgent);
    
    if (isBot) {
      setVisible(true);
      window.removeEventListener("force-lazy-load", handleForceLoad);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { 
        rootMargin: '250px 0px', // Load slightly before entering the viewport
        threshold: 0.01 
      }
    );

    observer.observe(el);
    return () => {
      window.removeEventListener("force-lazy-load", handleForceLoad);
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? 'auto' : height }}>
      {visible ? (
        <Suspense fallback={<SectionSkeleton />}>
          {children}
        </Suspense>
      ) : (
        <SectionSkeleton />
      )}
    </div>
  );
}
