"use client";

import { useEffect } from 'react';
import { imagePreloader, CRITICAL_IMAGES } from '@/utils/imagePreloader';

export default function ImagePreloader() {
  useEffect(() => {
    const preloadCriticalImages = async () => {
      try {
        console.log('🚀 Starting critical image preload...');
        const results = await imagePreloader.preloadMultiple(CRITICAL_IMAGES);
        
        console.log(`✅ Successfully preloaded ${results.success.length} images:`, results.success);
        
        if (results.failed.length > 0) {
          console.warn(`⚠️ Failed to preload ${results.failed.length} images:`, results.failed);
        }
      } catch (error) {
        console.error('❌ Error during image preloading:', error);
      }
    };

    // Preload critical images after a short delay to not block initial render
    const timer = setTimeout(preloadCriticalImages, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
} 