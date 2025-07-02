"use client";

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  '/images/gallery_photos/photo1.jpg?v=2',
  '/images/gallery_photos/photo2.jpg?v=2',
  '/images/gallery_photos/photo3.jpg?v=2',
  '/images/gallery_photos/photo4.jpg?v=2',
  '/images/gallery_photos/photo5.jpg?v=2',
  '/images/gallery_photos/photo6.jpg?v=2',
];

export default function Gallery() {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gold mb-6">
            Our Work
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the artistry and precision that defines our signature cuts and styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-square relative">
                <img
                  src={image}
                  alt={`Barbershop work ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load gallery image: ${image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded gallery image: ${image}`);
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">Classic Cut</h3>
                    <p className="text-sm text-white/80">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => window.open('/gallery', '_self')}
            className="bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-200 text-lg"
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
