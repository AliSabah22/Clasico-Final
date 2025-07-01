'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white p-4 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-accent text-black rounded-lg hover:bg-accent/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 