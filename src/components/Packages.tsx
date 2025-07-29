"use client";

import React from 'react';
import { openCojilioBooking } from '../utils/cojilio';

const packages = [
  {
    name: "Silver Package",
    description: "Essential grooming package with machine precision",
    price: "$145",
    features: [
      "45 minutes required",
      "3 haircuts",
      "3 beard trim line-up (machine)",
      "Valid for 3 months only",
      "Minimum time for haircut is 45 minutes"
    ],
    logo: "/images/packages/silver.png?v=2",
    popular: false
  },
  {
    name: "Gold Package",
    description: "Premium grooming package with blade precision",
    price: "$148.5",
    features: [
      "45 minutes required",
      "3 haircuts",
      "3 beard trim line-up (blade/shaver)",
      "Valid for 3 months only",
      "Minimum time for haircut is 45 minutes"
    ],
    logo: "/images/packages/gold.png?v=2",
    popular: true
  },
  {
    name: "Platinum Package",
    description: "Ultimate grooming package with extended benefits",
    price: "$264",
    features: [
      "45 minutes required",
      "6 haircuts",
      "6 beard trim line-up (blade/shaver)",
      "Valid for 6 months only",
      "Minimum time for haircut is 45 minutes"
    ],
    logo: "/images/packages/platinum.png?v=2",
    popular: false
  }
];

export default function Packages() {
  const handleBookPackage = (packageName: string) => {
    openCojilioBooking();
  };

  return (
    <section id="packages" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden section-padding">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-black/20 rounded-full text-gold text-xs md:text-sm font-semibold mb-6 md:mb-8 border border-white/20">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full mr-2 md:mr-3" />
            PREMIUM PACKAGES
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full ml-2 md:ml-3" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Choose Your
            <span className="block text-gold">Package</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            Select the perfect grooming package that suits your style and preferences. 
            Each package is crafted to deliver exceptional results in an atmosphere of sophistication.
          </p>
        </div>

        {/* Main Packages - Mobile optimized grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {packages.map((pkg, index) => {
            // Define color schemes for each package
            const getPackageStyles = (packageName: string) => {
              switch (packageName) {
                case "Silver Package":
                  return {
                    card: "bg-gradient-to-br from-slate-400 via-slate-300 to-slate-200 border-slate-500",
                    badge: "bg-slate-700 text-white border-slate-600",
                    text: "text-black",
                    textSecondary: "text-gray-800",
                    icon: "bg-slate-700 border-slate-600",
                    checkmark: "bg-slate-700 text-white"
                  };
                case "Gold Package":
                  return {
                    card: "bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 border-yellow-500",
                    badge: "bg-yellow-600 text-white border-yellow-500",
                    text: "text-black",
                    textSecondary: "text-gray-800",
                    icon: "bg-yellow-600 border-yellow-500",
                    checkmark: "bg-yellow-600 text-white"
                  };
                case "Platinum Package":
                  return {
                    card: "bg-gradient-to-br from-gray-100 via-white to-gray-50 border-gray-400",
                    badge: "bg-gray-800 text-white border-gray-700",
                    text: "text-black",
                    textSecondary: "text-gray-600",
                    icon: "bg-gray-800 border-gray-700",
                    checkmark: "bg-gray-800 text-white"
                  };
                default:
                  return {
                    card: "bg-gradient-to-br from-gray-800/50 to-black/50 border-white/10",
                    badge: "bg-gold text-black border-gold/30",
                    text: "text-white",
                    textSecondary: "text-white/70",
                    icon: "bg-black/20 border-white/20",
                    checkmark: "bg-gold text-black"
                  };
              }
            };

            const styles = getPackageStyles(pkg.name);

            return (
              <div
                key={pkg.name}
                className="group relative"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`relative ${styles.card} backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 pt-12 md:pt-16 border transition-all duration-500 h-full shadow-2xl hover:shadow-3xl hover:transform hover:scale-105`}>
                  {/* Package Icon - Mobile optimized positioning */}
                  <div className="absolute -top-20 md:-top-28 left-1/2 transform -translate-x-1/2 z-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    <img
                      src={pkg.logo}
                      alt={pkg.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Package Details - Mobile optimized */}
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className={`text-xl md:text-2xl font-bold ${styles.text} mb-3 md:mb-4`}>{pkg.name}</h3>
                    <p className={`${styles.textSecondary} mb-4 md:mb-6 leading-relaxed text-sm md:text-base`}>{pkg.description}</p>
                    
                    <div className="text-center mb-4 md:mb-6">
                      <div className={`text-2xl md:text-3xl font-bold ${styles.text}`}>{pkg.price}</div>
                    </div>
                  </div>

                  {/* Features - Mobile optimized */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className={`flex items-center ${styles.textSecondary} text-sm md:text-base`}
                      >
                        <div className={`w-5 h-5 rounded-full ${styles.checkmark} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Mobile optimized */}
                  <div className="text-center">
                    <button 
                      onClick={() => handleBookPackage(pkg.name)}
                      className="w-full bg-black text-white py-3 md:py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 