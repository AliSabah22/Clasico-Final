"use client";

import React from 'react';
import Image from 'next/image';

const packages = [
  {
    name: "Silver Package",
    description: "Essential grooming services for the modern man",
    price: "$45",
    features: ["Classic Haircut", "Beard Trim", "Hot Towel Treatment"],
    logo: "/images/packages/silver.png",
    popular: false
  },
  {
    name: "Gold Package",
    description: "Premium grooming experience with luxury touches",
    price: "$75",
    features: ["Premium Haircut", "Beard Styling", "Hot Towel Treatment", "Signature Aftershave"],
    logo: "/images/packages/gold.png",
    popular: true
  },
  {
    name: "Platinum Package",
    description: "Ultimate grooming experience with exclusive services",
    price: "$120",
    features: ["Luxury Haircut", "Beard Sculpting", "Hot Towel Treatment", "Signature Aftershave", "Private Consultation"],
    logo: "/images/packages/platinum.png",
    popular: false
  }
];

export default function Packages() {
  const handleBookPackage = (packageName: string) => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Choose Your Package
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect grooming package that suits your style and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-gold scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Logo - Positioned above package name */}
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={pkg.logo}
                    alt={`${pkg.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Package Name */}
              <h3 className="text-2xl font-display text-center mb-4">{pkg.name}</h3>
              
              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gold">{pkg.price}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">{pkg.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-gold mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <button
                onClick={() => handleBookPackage(pkg.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-gold text-black hover:bg-yellow-400'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Book {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 