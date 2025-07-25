"use client";

import React, { useState, useEffect, useRef } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  poster?: string;
  onLoad?: () => void;
  onError?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function OptimizedVideo({
  src,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  playsInline = true,
  preload = 'metadata',
  poster,
  onLoad,
  onError,
  onPlay,
  onPause,
}: OptimizedVideoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preload video when visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setIsLoading(false);
        onLoad?.();
      };

      const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        onError?.();
      };

      const handlePlay = () => {
        onPlay?.();
      };

      const handlePause = () => {
        onPause?.();
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      // Start loading the video
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [isVisible, onLoad, onError, onPlay, onPause]);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-500">
          <div className="text-2xl mb-2">🎥</div>
          <p className="text-sm">Video not available</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading video...</div>
        </div>
      )}
      
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline={playsInline}
          preload={preload}
          poster={poster}
        />
      )}
    </div>
  );
} 