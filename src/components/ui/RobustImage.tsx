"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface RobustImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  fallbackSrc?: string;
  loadingStrategy?: 'eager' | 'lazy' | 'preload';
  onLoad?: () => void;
  onError?: () => void;
}

export default function RobustImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '100vw',
  quality = 85,
  fallbackSrc,
  loadingStrategy = 'lazy',
  onLoad,
  onError,
}: RobustImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  // Add cache busting for production
  const getImageSrc = (imageSrc: string) => {
    if (process.env.NODE_ENV === 'production') {
      const separator = imageSrc.includes('?') ? '&' : '?';
      return `${imageSrc}${separator}v=${Date.now()}`;
    }
    return imageSrc;
  };

  useEffect(() => {
    setCurrentSrc(getImageSrc(src));
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
    console.log(`✅ Successfully loaded image: ${currentSrc}`);
  };

  const handleError = () => {
    console.error(`❌ Failed to load image: ${currentSrc}`);
    
    if (retryCount < maxRetries) {
      // Retry with different cache busting
      const newRetryCount = retryCount + 1;
      setRetryCount(newRetryCount);
      const retrySrc = getImageSrc(src);
      setCurrentSrc(retrySrc);
      console.log(`🔄 Retrying image load (${newRetryCount}/${maxRetries}): ${retrySrc}`);
      return;
    }

    if (fallbackSrc && currentSrc !== fallbackSrc) {
      console.log(`🔄 Using fallback image: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setRetryCount(0);
      return;
    }

    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Preload image if strategy is preload
  useEffect(() => {
    if (loadingStrategy === 'preload') {
      const img = new window.Image();
      img.onload = () => console.log(`📦 Preloaded image: ${currentSrc}`);
      img.onerror = () => console.error(`❌ Failed to preload image: ${currentSrc}`);
      img.src = currentSrc;
    }
  }, [currentSrc, loadingStrategy]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={!fill ? { width: width || 300, height: height || 200 } : {}}
      >
        <div className="text-center text-gray-500 p-4">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
        </div>
      )}

      <Image
        src={currentSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`
          transition-all duration-500 ease-in-out
          ${isLoading ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}
          ${className}
        `}
        onLoad={handleLoad}
        onError={handleError}
        priority={priority}
        fill={fill}
        sizes={sizes}
        quality={quality}
        loading={loadingStrategy === 'eager' ? 'eager' : 'lazy'}
        unoptimized={process.env.NODE_ENV === 'development'}
      />
    </div>
  );
} 