import { useEffect } from 'react'

// Image optimization configuration
export const imageConfig = {
  sizes: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  quality: 90,
  format: 'webp',
}

// Lazy loading configuration
export const lazyLoadConfig = {
  rootMargin: '50px',
  threshold: 0.1,
}

// Performance monitoring
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log('FCP:', entry.startTime)
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log('LCP:', entry.startTime)
        })
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if ('processingStart' in entry) {
            console.log('FID:', (entry as any).processingStart - entry.startTime)
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if ('value' in entry) {
            console.log('CLS:', (entry as any).value)
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])
}

// Resource hints
export const resourceHints = {
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
  ],
  dnsPrefetch: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
  ],
}

// Cache control headers
export const cacheControl = {
  static: 'public, max-age=31536000, immutable',
  dynamic: 'public, max-age=3600, must-revalidate',
  api: 'public, max-age=60, must-revalidate',
} 