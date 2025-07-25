"use client";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'accent';
}

export default function LoadingSpinner({ size = 'md', color = 'accent' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  const colorClasses = {
    white: 'border-white border-t-transparent',
    accent: 'border-accent border-t-transparent',
  };
  return (
    <div
      className={`inline-block animate-spin rounded-full border-4 ${sizeClasses[size]} ${colorClasses[color]}`}
      role="status"
      aria-label="Loading"
    />
  );
} 