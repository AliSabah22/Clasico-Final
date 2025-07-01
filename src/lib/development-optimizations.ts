// Development optimizations to speed up builds
export const isDevelopment = process.env.NODE_ENV === 'development';

// Disable expensive features in development
export const developmentConfig = {
  disableAnimations: isDevelopment,
  disableSourceMaps: isDevelopment,
  disableTypeChecking: isDevelopment,
  disableESLint: isDevelopment,
  fastRefresh: isDevelopment,
};

// Optimized image loading for development
export const imageConfig = {
  priority: !isDevelopment,
  loading: isDevelopment ? 'lazy' : 'eager',
  quality: isDevelopment ? 75 : 90,
}; 