"use client";
import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "/images/gallary_photos/469224525_17889610338110577_2569995278072668272_n.jpg",
    "/images/gallary_photos/474389932_17895039927110577_1959066183506360602_n.jpg",
    "/images/gallary_photos/491445309_17906499714110577_8094427299739655103_n.jpeg",
    "/images/gallary_photos/496139148_17908424976110577_6263820544994684137_n.jpeg",
    "/images/gallary_photos/DSC03191.jpg",
    "/images/gallary_photos/DSC03992.jpg",
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