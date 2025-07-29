'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";

// Temporary placeholder functions until cojilio module is fixed
const openCojilioBooking = () => {
  console.log('Opening booking system...');
  // Add your booking logic here
};

const callBarbershop = () => {
  console.log('Calling barbershop...');
  // Add your call logic here
};

const experiences = [
  {
    title: "The Classic Cut",
    description: "A timeless haircut that combines traditional techniques with modern precision.",
    image: "/images/services/service1.jpg?v=2",
    price: "$45",
    duration: "45 min"
  },
  {
    title: "The Royal Shave",
    description: "Experience the art of traditional wet shaving with hot towels and premium products.",
    image: "/images/services/service2.jpg?v=2",
    price: "$35",
    duration: "30 min"
  },
  {
    title: "The Executive Package",
    description: "A complete grooming experience including haircut, shave, and facial treatment.",
    image: "/images/services/service3.jpg?v=2",
    price: "$85",
    duration: "90 min"
  }
];

export default function SignatureExperience() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-black/20 rounded-full text-gold text-sm font-semibold mb-8 border border-white/20">
            <span className="w-3 h-3 bg-gold rounded-full mr-3" />
            SIGNATURE EXPERIENCES
            <span className="w-3 h-3 bg-gold rounded-full ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Signature
            <span className="block text-gold">Experiences</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our curated selection of premium grooming services, each designed
            to deliver an exceptional experience that transcends the ordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {experience.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold text-xl">
                    {experience.price}
                  </span>
                  <span className="text-white/50 text-sm bg-white/10 px-3 py-1 rounded-full">
                    {experience.duration}
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <button 
                    onClick={openCojilioBooking}
                    className="w-full bg-gold text-black py-3 px-6 rounded-xl font-semibold hover:bg-gold/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Now
                  </button>
                  <button 
                    onClick={callBarbershop}
                    className="w-full bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 py-3 px-6 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    📞 Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display text-white mb-4">
              Experience Our
              <span className="block text-gold">Signature Service</span>
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Watch our master barbers in action as they deliver the perfect grooming experience
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Player Component
function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      setHasError(true);
    };

    const handleCanPlay = () => {
      // Auto-play when ready (muted for browser compatibility)
      if (video.muted) {
        video.play().catch(() => {
          console.log('Autoplay not supported');
        });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  if (hasError) {
    return (
      <div className="bg-gray-900 rounded-2xl p-12 text-center">
        <div className="text-white">
          <p className="text-xl mb-4">Video could not be loaded</p>
          <p className="text-gray-400">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        className="w-full h-auto max-h-[600px] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/signature-experience.jpeg"
        preload="metadata"
      >
        <source src="/videos/store video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold"></div>
        </div>
      )}
      
      {/* Play/Pause overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={togglePlay}
      >
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-6">
          {isPlaying ? (
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-1 h-8 bg-white rounded-sm mr-1"></div>
              <div className="w-1 h-8 bg-white rounded-sm"></div>
            </div>
          ) : (
            <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          )}
        </div>
      </div>
      
      {/* Video controls info */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
        Click to {isPlaying ? 'pause' : 'play'}
      </div>
    </div>
  );
} 