'use client'

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center">
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-4xl font-display font-bold mb-8">Clásico Barbershop</h1>
          
          {/* Loading spinner */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
          
          <p className="text-gray-400 text-lg animate-pulse">
            Preparing your luxury experience...
          </p>
        </div>
      </div>

      {/* Animated decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
      </div>
    </div>
  )
} 