"use client";

import { useRef } from 'react';
import OptimizedImage from '../ui/OptimizedImage';
import BookingCTA from '../ui/BookingCTA';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  const services = [
    {
      name: "Silver Experience",
      description: "Classic precision haircut with hot towel treatment and styling consultation.",
      price: "$145",
      duration: "45 min",
      luxury: "Standard",
      features: ["3 Haircuts", "3 Beard Trim Line-up (Machine)", "Valid for 3 months only", "Minimum time for haircut is 45 minutes"],
      image: "/images/packages/silver.png"
    },
    {
      name: "Gold Experience",
      description: "Premium haircut with beard trim, hot towel shave, and luxury grooming products.",
      price: "$148.5",
      duration: "45 min",
      luxury: "Premium",
      features: ["3 Haircuts", "3 Beard Trim Line-up (Blade/Shaver)", "Valid for 3 months only", "Minimum time for haircut is 45 minutes"],
      image: "/images/packages/gold.png"
    },
    {
      name: "Platinum Experience",
      description: "Ultimate luxury experience with full grooming, massage, and premium treatment.",
      price: "$264",
      duration: "45 min",
      luxury: "Luxury",
      features: ["6 Haircuts", "6 Beard Trim Line-up (Blade/Shaver)", "Valid for 6 months only", "Minimum time for haircut is 45 minutes"],
      image: "/images/packages/platinum.png"
    }
  ];

  const additionalServices = [
    { name: "Beard Sculpting", price: "$35", duration: "30 min" },
    { name: "Hot Towel Shave", price: "$40", duration: "45 min" },
    { name: "Scalp Treatment", price: "$25", duration: "20 min" },
    { name: "Hair Coloring", price: "$60", duration: "90 min" },
    { name: "Style Consultation", price: "$20", duration: "15 min" },
    { name: "Product Application", price: "$15", duration: "10 min" },
  ];

  return (
    <section ref={containerRef} id="services" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden section-padding">
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
            LUXURY SERVICES
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full ml-2 md:ml-3" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Premium Grooming
            <span className="block text-gold">Experiences</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            Experience the art of traditional barbering elevated to luxury standards. 
            Each service is crafted to deliver exceptional results in an atmosphere of sophistication.
          </p>
        </div>

        {/* Main Services - Mobile optimized grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => {
            // Define color schemes for each package
            const getPackageStyles = (luxury: string) => {
              switch (luxury) {
                case "Standard": // Silver
                  return {
                    card: "bg-gradient-to-br from-slate-400 via-slate-300 to-slate-200 border-slate-500",
                    badge: "bg-slate-700 text-white border-slate-600",
                    text: "text-black",
                    textSecondary: "text-gray-800",
                    icon: "bg-slate-700 border-slate-600",
                    checkmark: "bg-slate-700 text-white"
                  };
                case "Premium": // Gold
                  return {
                    card: "bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 border-yellow-500",
                    badge: "bg-yellow-600 text-white border-yellow-500",
                    text: "text-black",
                    textSecondary: "text-gray-800",
                    icon: "bg-yellow-600 border-yellow-500",
                    checkmark: "bg-yellow-600 text-white"
                  };
                case "Luxury": // Platinum
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

            const styles = getPackageStyles(service.luxury);

            return (
              <div
                key={service.name}
                className="group relative"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`relative ${styles.card} backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 pt-12 md:pt-16 border transition-all duration-500 h-full shadow-2xl hover:shadow-3xl hover:transform hover:scale-105`}>
                  {/* Service Icon - Mobile optimized positioning */}
                  <div className="absolute -top-20 md:-top-28 left-1/2 transform -translate-x-1/2 z-10">
                    <OptimizedImage
                      src={service.image}
                      alt={service.name}
                      width={160}
                      height={160}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-100"
                    />
                  </div>

                  {/* Service Details - Mobile optimized */}
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className={`text-xl md:text-2xl font-bold ${styles.text} mb-3 md:mb-4`}>{service.name}</h3>
                    <p className={`${styles.textSecondary} mb-4 md:mb-6 leading-relaxed text-sm md:text-base`}>{service.description}</p>
                    
                    <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-4 md:mb-6">
                      <div className="text-center">
                        <div className={`text-2xl md:text-3xl font-bold ${styles.text}`}>{service.price}</div>
                        <div className={`${styles.textSecondary} text-xs md:text-sm`}>Price</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl md:text-3xl font-bold ${styles.text}`}>{service.duration}</div>
                        <div className={`${styles.textSecondary} text-xs md:text-sm`}>Duration</div>
                      </div>
                    </div>
                  </div>

                  {/* Features - Mobile optimized */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, featureIndex) => (
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
                      onClick={handleBookNow}
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

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-display text-white mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={service.name} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold">{service.price}</span>
                  <span className="text-white/70 text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <BookingCTA />
      </div>
    </section>
  );
} 