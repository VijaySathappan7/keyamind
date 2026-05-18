import { useState, memo } from 'react';

const LazyImage = memo(({ src, alt, className, width, height, objectCover, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      className={`relative flex items-center justify-center ${className || ''}`}
      style={objectCover ? { width: '100%', height: '100%' } : { 
        aspectRatio: width && height ? `${width} / ${height}` : 'auto',
        width: '100%',
        maxWidth: width ? `${width}px` : '100%'
      }}
    >
      {/* Dynamic Glass-Morphic Pulse Overlay */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/20 to-purple-50/20 backdrop-blur-md animate-pulse z-[2]" />
      )}
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${objectCover ? 'object-cover' : 'object-contain'} transition-opacity duration-700 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';
export default LazyImage;
