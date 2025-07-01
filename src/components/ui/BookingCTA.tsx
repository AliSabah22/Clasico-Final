"use client";

import React from "react";

export default function BookingCTA() {
  return (
    <div className="bg-gradient-to-r from-gold to-yellow-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
      <h3 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
        Ready for Your Transformation?
      </h3>
      <p className="text-black/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Book your appointment today and experience the Clasico difference. 
        Your perfect haircut is just a click away.
      </p>
      <button 
        onClick={() => window.open('https://booking.cojilio.com/clasicobarbershop', '_blank')}
        className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation"
      >
        Book Now
      </button>
    </div>
  );
} 