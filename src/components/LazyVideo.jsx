import { useEffect, useRef, useState, memo } from 'react';

const LazyVideo = memo(({ src, mobileSrc, poster, className, ...props }) => {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setInView(intersecting);
        if (intersecting) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.05, rootMargin: "120px 0px" } // Load slightly before entering view
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
    if (!video || !activeSrc) return;

    if (inView) {
      // Small timeout to ensure browser thread handles play operation safely
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
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
      src={hasEnteredView && activeSrc ? activeSrc : undefined}
      {...props}
    />
  );
});

LazyVideo.displayName = 'LazyVideo';
export default LazyVideo;

