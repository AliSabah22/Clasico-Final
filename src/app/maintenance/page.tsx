'use client'

import { useEffect, useState } from 'react'

export default function Maintenance() {
  const [estimatedTime, setEstimatedTime] = useState<string>('')

  useEffect(() => {
    // Calculate estimated completion time (example: 2 hours from now)
    const completionTime = new Date(Date.now() + 2 * 60 * 60 * 1000)
    setEstimatedTime(completionTime.toLocaleTimeString())
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Under Maintenance</h1>
          <h2 className="text-2xl md:text-3xl font-display mb-8">We'll be back soon!</h2>
          <p className="text-lg text-gray-400 mb-4 max-w-md mx-auto">
            We're currently performing some maintenance to improve your experience.
            Please check back later.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Estimated completion time: {estimatedTime}
          </p>
        </div>
      </div>

      {/* Animated decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-slide-right" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-slide-left" />
      </div>
    </div>
  )
} 