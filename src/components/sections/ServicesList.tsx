"use client";

import { useRef } from 'react';
import OptimizedImage from '../ui/OptimizedImage';
import BookingCTA from '../ui/BookingCTA';
import { openCojilioBooking, callBarbershop } from '../../utils/cojilio';
import { Scissors, Star, Droplet } from "lucide-react";

export default function ServicesList() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBookNow = () => {
    openCojilioBooking();
  };

  const serviceCategories = [
    {
      name: "Hair & Beard",
      icon: <Scissors className="w-8 h-8 text-yellow-500" />,
      services: [
        { name: "Haircut (Taper, Zero Fade, Skin Fade)", price: 30 },
        { name: "Senior haircut (+60)", price: 24 },
        { name: "Student haircut", price: 28.49 },
        { name: "Kids haircut (5 and under)", price: 25 },
        { name: "Kids haircut (zero fade)", price: 30 },
        { name: "Haircut & beard trim", price: 45 },
        { name: "Haircut & beard trim line up (blade)", price: 50 },
        { name: "Haircut & beard trim Line-up (machine)", price: 47 },
        { name: "Haircut & line-up beard (blade)", price: 39.99 },
        { name: "Haircut & line-up (machine)", price: 38.45 },
        { name: "Haircut & beard hot towel shave (blade)", price: 47.99 },
        { name: "Scissor cut", price: 33.25 },
        { name: "Buzzcut", price: 24.99 },
        { name: "Buzzcut & Skin Fade", price: 30 },
        { name: "Line-up, hair & beard (blade)", price: 20 },
      ]
    },
    {
      name: "Fades",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      services: [
        { name: "Side fade & beard trim", price: 37.99 },
        { name: "Side fade & beard trim line-up (blade)", price: 47.99 },
        { name: "Side fade & beard trim line-up (machine)", price: 45 },
        { name: "Side fade & line-up beard (blade)", price: 35 },
        { name: "Side fade & line-up beard (machine)", price: 33.65 },
        { name: "Side fade & beard hot tower shave (blade)", price: 47.75 },
        { name: "Buzz cut & beard trim line-up (blade)", price: 50 },
        { name: "Buzz cut & beard trim line-up (machine)", price: 47.50 },
        { name: "Shampoo & wash", price: 5 },
        { name: "Full shave with hot towel (head)", price: 35 },
        { name: "Hair design", price: "6 & up" },
        { name: "Hair styling", price: 15 },
      ]
    },
    {
      name: "Face Waxing",
      icon: <Droplet className="w-8 h-8 text-yellow-500" />,
      services: [
          { name: "Ears wax or threading", price: 10 },
          { name: "Nose waxing", price: 10 },
          { name: "Unibrow threading", price: 7 },
          { name: "Eyebrows waxing", price: 15 },
          { name: "Eyebrows shaping (blade)", price: 10 },
          { name: "Forehead wax or threading", price: 8 },
          { name: "Cheeks wax or threading", price: 10 },
          { name: "Full face wax or threading", price: 30 },
          { name: "Beard line-up wax or threading", price: 15 },
          { name: "Facial (steam, hot towel, black mask and more)", price: 55 },
      ]
    },
    {
      name: "Beard Services",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      services: [
          { name: "Beard trim", price: 15 },
          { name: "Beard trim (scissors)", price: 15 },
          { name: "Line-up beard (blade)", price: 10 },
          { name: "Line-up beard (machine)", price: 8.99 },
          { name: "Beard trim line-up (blade)", price: 25 },
          { name: "Beard trim line-up (machine)", price: 24 },
          { name: "Hot towel", price: 5 },
          { name: "Beard Hot towel shave (blade)", price: 30 },
          { name: "Hair dye", price: 45 },
          { name: "Beard dye (colouring)", price: 24 },
          { name: "Moustache dye (colouring)", price: 7 },
          { name: "Moustache trim", price: 5 },
          { name: "Steam face shave", price: 35 },
          { name: "Beard trim line up (blade) and hot tower", price: 28.50 },
      ]
    }
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
            OUR SERVICES
            <span className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full ml-2 md:ml-3" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Professional
            <span className="block text-gold">Grooming Services</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            Experience the art of traditional barbering with modern techniques. 
            Each service is crafted to deliver exceptional results in a professional atmosphere.
          </p>
        </div>

        {/* Services Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {serviceCategories.map((category, index) => (
            <div
              key={category.name}
              className="group relative"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 transition-all duration-500 h-full shadow-2xl hover:shadow-3xl hover:transform hover:scale-105">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="bg-gold/20 p-3 rounded-xl border border-gold/30">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display ml-4 text-white font-bold">{category.name}</h3>
                </div>

                {/* Services List */}
                <div className="space-y-4 flex-grow">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex justify-between items-start border-b border-white/10 pb-3">
                      <span className="text-white/80 pr-2 text-sm md:text-base leading-relaxed">{service.name}</span>
                      <span className="font-semibold text-gold text-right whitespace-nowrap text-sm md:text-base">
                        {typeof service.price === 'number' ? `$${service.price.toFixed(2)}` : service.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-6">
                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-gold text-black py-3 md:py-4 px-6 rounded-xl font-semibold hover:bg-gold/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <BookingCTA />
      </div>
    </section>
  );
} 