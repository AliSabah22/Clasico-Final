"use client";
import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "/images/gallary_photos/photo1.jpg",
    "/images/gallary_photos/photo2.jpg",
    "/images/gallary_photos/photo3.jpg",
    "/images/gallary_photos/photo4.jpg",
    "/images/gallary_photos/photo5.jpg",
    "/images/gallary_photos/photo6.jpg",
  ];

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
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    onError={(e) => {
                      console.error(`Failed to load gallery image: ${image}`);
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded gallery image: ${image}`);
                    }}
                  />
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