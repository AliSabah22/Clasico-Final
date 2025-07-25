"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function SignatureExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const loading = loadingRef.current;
    
    if (video && loading) {
      const handleCanPlay = () => {
        loading.style.display = 'none';
      };
      
      const handleError = () => {
        loading.innerHTML = `
          <div class="text-center text-white">
            <div class="text-4xl mb-4">❌</div>
            <p class="text-lg">Video failed to load</p>
            <p class="text-sm text-gray-400 mt-2">Please refresh the page</p>
          </div>
        `;
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const features = [
    "Premium grooming products",
    "Complimentary refreshments",
    "Luxury leather seating",
    "Private consultation",
    "Hot towel treatment",
    "Signature aftershave",
  ];

  const handleBookExperience = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-black">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-gold">
              The Signature Experience
            </h2>
            <p className="text-gold/80 mb-8">
              Step into a world of refined grooming where every detail is crafted to perfection. 
              Our signature experience combines traditional techniques with modern luxury.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gold"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            

            <button 
              className="btn-primary"
              onClick={handleBookExperience}
            >
              Book Your Experience
            </button>
          </div>

          {/* Right Content - Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-luxury bg-black">
            <video
              ref={videoRef}
              src="/videos/signature-experience.mp4"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              controls
              onError={(e) => {
                console.error('Failed to load signature experience video:', e);
              }}
              onLoadStart={() => {
                console.log('Video loading started');
              }}
              onCanPlay={() => {
                console.log('Video can play');
              }}
              onPlay={() => {
                console.log('Video started playing');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Loading indicator */}
            <div ref={loadingRef} className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
                <p className="text-sm">Loading video...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 