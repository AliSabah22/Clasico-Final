"use client";

import React from 'react';
import Image from 'next/image';
 
export default function Hero() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex items-center justify-center bg-black/90 lg:bg-transparent">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Clasico Barbershop
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience the art of traditional barbering in a modern setting. Where style meets legacy.
          </p>
          <div className="space-y-4">
            <button
              onClick={handleBookNow}
              className="w-full lg:w-auto bg-gold text-black px-8 py-4 text-lg rounded-md font-medium hover:bg-gold/80 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </button>
            <div className="text-white/70 text-sm">
              <p>📍 3480 Platinum Dr., Unit 105, Mississauga</p>
              <p>📞 (905) 607-4400</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image (Desktop) */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Clasico Barbershop interior"
          fill
          className="object-cover"
          priority
          quality={60}
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Clasico Barbershop interior"
          fill
          className="object-cover"
          priority
          quality={60}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
} 