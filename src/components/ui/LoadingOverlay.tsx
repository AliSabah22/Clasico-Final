'use client'

interface LoadingOverlayProps {
  isLoading: boolean
  message?: string
}

export default function LoadingOverlay({ isLoading, message = 'Loading...' }: LoadingOverlayProps) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-luxury max-w-sm w-full mx-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            <div className="w-full h-full border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
          <p className="text-gray-600 text-center animate-pulse">{message}</p>
        </div>
      </div>
    </div>
  )
} 