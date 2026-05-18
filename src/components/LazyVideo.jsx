import { useEffect, useRef, useState, memo } from 'react';

const LazyVideo = memo(({ src, mobileSrc, poster, className, ...props }) => {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "100px 0px" } // Load slightly before entering view
    );

    observer.observe(video);
    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  // Detect Mobile Viewports dynamically for source selection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const activeSrc = isMobile && mobileSrc ? mobileSrc : src;

  // Play/pause based on intersection and source readiness
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView && activeSrc) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, activeSrc]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      src={inView && activeSrc ? activeSrc : undefined}
      {...props}
    />
  );
});

LazyVideo.displayName = 'LazyVideo';
export default LazyVideo;

