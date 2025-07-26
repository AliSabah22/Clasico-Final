"use client";

import React from "react";
import { callBarbershop } from '../../utils/cojilio';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <button
        onClick={callBarbershop}
        className="w-16 h-16 bg-gold text-black rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Call Clasico Barbershop"
      >
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </button>
    </div>
  );
} 