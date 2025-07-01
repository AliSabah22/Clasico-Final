'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-display text-gold mb-4">
          Something went wrong!
        </h2>
        <p className="text-white/80 mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-gold/80 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
