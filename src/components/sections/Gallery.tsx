"use client";

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/gallary_photos/DSC03191.jpg',
    alt: 'Barbershop work 1',
    title: 'Classic Cut'
  },
  {
    src: '/images/gallary_photos/DSC03992.jpg',
    alt: 'Barbershop work 2',
    title: 'Modern Style'
  },
  {
    src: '/images/gallary_photos/469224525_17889610338110577_2569995278072668272_n.jpg',
    alt: 'Barbershop work 3',
    title: 'Premium Service'
  },
  {
    src: '/images/gallary_photos/474389932_17895039927110577_1959066183506360602_n.jpg',
    alt: 'Barbershop work 4',
    title: 'Expert Craftsmanship'
  },
  {
    src: '/images/gallary_photos/491445309_17906499714110577_8094427299739655103_n.jpeg',
    alt: 'Barbershop work 5',
    title: 'Luxury Experience'
  },
  {
    src: '/images/gallary_photos/496139148_17908424976110577_6263820544994684137_n.jpeg',
    alt: 'Barbershop work 6',
    title: 'Professional Finish'
  }
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
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
