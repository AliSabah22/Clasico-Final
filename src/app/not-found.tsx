"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative z-10 text-center px-4">
      <div>
        <h1 className="text-9xl font-display font-bold mb-4">404</h1>
        <h2 className="text-3xl font-display mb-8">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-md mx-auto">
          The page you're looking for seems to have vanished into thin air.
          Let us guide you back to our luxury grooming experience.
        </p>
        <Link href="/">
          <span className="inline-block bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-gold/80 transition-colors">
            Return Home
          </span>
        </Link>
      </div>
      {/* Decorative lines (optional, static) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>
    </div>
  );
} 