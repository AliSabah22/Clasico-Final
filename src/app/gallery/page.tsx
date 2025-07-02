"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const galleryImages = [
    "/images/gallery_photos/photo1.jpg?v=2",
    "/images/gallery_photos/photo2.jpg?v=2",
    "/images/gallery_photos/photo3.jpg?v=2",
    "/images/gallery_photos/photo4.jpg?v=2",
    "/images/gallery_photos/photo5.jpg?v=2",
    "/images/gallery_photos/photo6.jpg?v=2",
  ];

  useEffect(() => {
    // Preload images
    galleryImages.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Preloaded image ${index + 1}: ${image}`);
        setLoadedImages(prev => new Set(prev).add(index));
      };
      img.onerror = () => {
        console.error(`Failed to preload image ${index + 1}: ${image}`);
        setImageErrors(prev => new Set(prev).add(index));
      };
      img.src = image;
    });
  }, []);

  const handleImageError = (index: number) => {
    console.error(`Failed to load gallery image: ${galleryImages[index]}`);
    setImageErrors(prev => new Set(prev).add(index));
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Our Gallery
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
                Take a look at our work and the amazing transformations we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {!imageErrors.has(index) ? (
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(index)}
                      onLoad={() => {
                        console.log(`Successfully loaded gallery image: ${image}`);
                      }}
                      loading="eager"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                        </svg>
                        <p>Image not available</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 