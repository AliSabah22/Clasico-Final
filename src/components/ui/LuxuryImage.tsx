"use client";

import { useState } from 'react';
import Image from 'next/image';

interface LuxuryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function LuxuryImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
}: LuxuryImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
        {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        )}

      {isError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <p className="text-white/60">Failed to load image</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`
            transition-opacity duration-500
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${className}
          `}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsError(true);
          }}
          priority={priority}
          sizes={sizes}
          quality={90}
        />
      )}
    </div>
  );
} 