"use client";

import React from 'react';
import Image from 'next/image';
import { openCojilioBooking } from '../../utils/cojilio';
 
export default function Hero() {
  const handleBookNow = () => {
    openCojilioBooking();
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Left Side - Background Image with Content Overlay */}
      <div className="w-full lg:w-1/2 relative">
        <img
          src="/images/hero/hero-bg.jpeg"
          alt="Clasico Barbershop interior"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error('Failed to load hero left side image');
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Successfully loaded hero left side image');
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-8 lg:p-16 flex items-center justify-center h-full">
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
      </div>

      {/* Right Side - Image (Desktop) */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src="/images/hero/clasicobrand.jpg"
          alt="Clasico Barbershop branding"
          className="absolute inset-0 w-full h-full object-contain"
          onError={(e) => {
            console.error('Failed to load hero branding image (desktop)');
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Successfully loaded hero branding image (desktop)');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/images/hero/clasicobrand.jpg"
          alt="Clasico Barbershop branding"
          className="absolute inset-0 w-full h-full object-contain"
          onError={(e) => {
            console.error('Failed to load hero branding image');
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Successfully loaded hero branding image');
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
