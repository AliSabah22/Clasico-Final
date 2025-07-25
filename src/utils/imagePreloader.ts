// Image preloader utility for ensuring critical images are loaded
export interface ImageToPreload {
  src: string;
  priority?: boolean;
  fallback?: string;
}

export class ImagePreloader {
  private static instance: ImagePreloader;
  private preloadedImages: Set<string> = new Set();
  private failedImages: Set<string> = new Set();
  private loadingPromises: Map<string, Promise<boolean>> = new Map();

  static getInstance(): ImagePreloader {
    if (!ImagePreloader.instance) {
      ImagePreloader.instance = new ImagePreloader();
    }
    return ImagePreloader.instance;
  }

  async preloadImage(src: string, fallback?: string): Promise<boolean> {
    if (this.preloadedImages.has(src)) {
      return true;
    }

    if (this.failedImages.has(src)) {
      return false;
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    const loadPromise = this.loadImage(src, fallback);
    this.loadingPromises.set(src, loadPromise);

    try {
      const success = await loadPromise;
      if (success) {
        this.preloadedImages.add(src);
      } else {
        this.failedImages.add(src);
      }
      return success;
    } finally {
      this.loadingPromises.delete(src);
    }
  }

  private loadImage(src: string, fallback?: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => {
        console.log(`✅ Preloaded image: ${src}`);
        resolve(true);
      };

      img.onerror = () => {
        console.error(`❌ Failed to preload image: ${src}`);
        
        if (fallback && fallback !== src) {
          console.log(`🔄 Trying fallback image: ${fallback}`);
          this.loadImage(fallback).then(resolve);
        } else {
          resolve(false);
        }
      };

      // Add cache busting for production
      const imageSrc = this.addCacheBusting(src);
      img.src = imageSrc;
    });
  }

  private addCacheBusting(src: string): string {
    if (process.env.NODE_ENV === 'production') {
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}v=${Date.now()}`;
    }
    return src;
  }

  async preloadMultiple(images: ImageToPreload[]): Promise<{ success: string[], failed: string[] }> {
    const results = await Promise.allSettled(
      images.map(img => this.preloadImage(img.src, img.fallback))
    );

    const success: string[] = [];
    const failed: string[] = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        success.push(images[index].src);
      } else {
        failed.push(images[index].src);
      }
    });

    return { success, failed };
  }

  isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }

  hasFailed(src: string): boolean {
    return this.failedImages.has(src);
  }

  clearCache(): void {
    this.preloadedImages.clear();
    this.failedImages.clear();
    this.loadingPromises.clear();
  }
}

// Critical images that should be preloaded
export const CRITICAL_IMAGES: ImageToPreload[] = [
  { src: '/images/hero/hero-bg.jpeg', priority: true },
  { src: '/images/logo.jpg', priority: true },
  { src: '/team/nemar.jpeg', priority: true },
  { src: '/team/ali.jpeg', priority: true },
  { src: '/team/humam.jpeg', priority: true },
  { src: '/team/akram.jpeg', priority: true },
  { src: '/team/team.jpeg', priority: true },
];

// Gallery images
export const GALLERY_IMAGES: ImageToPreload[] = [
  { src: '/images/gallery_photos/photo1.jpg' },
  { src: '/images/gallery_photos/photo2.jpg' },
  { src: '/images/gallery_photos/photo3.jpg' },
  { src: '/images/gallery_photos/photo4.jpg' },
  { src: '/images/gallery_photos/photo5.jpg' },
  { src: '/images/gallery_photos/photo6.jpg' },
];

// Service images
export const SERVICE_IMAGES: ImageToPreload[] = [
  { src: '/images/services/service1.jpg' },
  { src: '/images/services/service2.jpg' },
  { src: '/images/services/service3.jpg' },
];

// Initialize preloader
export const imagePreloader = ImagePreloader.getInstance(); 