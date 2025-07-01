'use client';

import Image from "next/image";

const experiences = [
  {
    title: "The Classic Cut",
    description: "A timeless haircut that combines traditional techniques with modern precision.",
    image: "/images/services/service1.jpg",
    price: "$45",
    duration: "45 min"
  },
  {
    title: "The Royal Shave",
    description: "Experience the art of traditional wet shaving with hot towels and premium products.",
    image: "/images/services/service2.jpg",
    price: "$35",
    duration: "30 min"
  },
  {
    title: "The Executive Package",
    description: "A complete grooming experience including haircut, shave, and facial treatment.",
    image: "/images/services/service3.jpg",
    price: "$85",
    duration: "90 min"
  }
];

export default function SignatureExperience() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-black/20 rounded-full text-gold text-sm font-semibold mb-8 border border-white/20">
            <span className="w-3 h-3 bg-gold rounded-full mr-3" />
            SIGNATURE EXPERIENCES
            <span className="w-3 h-3 bg-gold rounded-full ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Signature
            <span className="block text-gold">Experiences</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our curated selection of premium grooming services, each designed
            to deliver an exceptional experience that transcends the ordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {experience.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold text-xl">
                    {experience.price}
                  </span>
                  <span className="text-white/50 text-sm bg-white/10 px-3 py-1 rounded-full">
                    {experience.duration}
                  </span>
                </div>
                
                {/* CTA Button */}
                <button 
                  onClick={() => window.open('https://booking.cojilio.com/clasicobarbershop', '_blank')}
                  className="w-full mt-6 bg-gold text-black py-3 px-6 rounded-xl font-semibold hover:bg-gold/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 