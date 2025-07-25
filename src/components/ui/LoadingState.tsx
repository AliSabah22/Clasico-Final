'use client'

interface LoadingStateProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal'
}

export default function LoadingState({ 
  className = '', 
  size = 'md', 
  variant = 'default' 
}: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  if (variant === 'minimal') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="w-full h-full border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} mb-4`}>
        <div className="w-full h-full border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
      <p className="text-sm text-gray-500 animate-pulse">Loading...</p>
    </div>
  )
} 