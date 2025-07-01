"use client";

import Image from 'next/image';

export default function SignatureExperience() {
  const features = [
    "Premium grooming products",
    "Complimentary refreshments",
    "Luxury leather seating",
    "Private consultation",
    "Hot towel treatment",
    "Signature aftershave",
  ];

  const handleBookExperience = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-black">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-gold">
              The Signature Experience
            </h2>
            <p className="text-black/80 mb-8">
              Step into a world of refined grooming where every detail is crafted to perfection. 
              Our signature experience combines traditional techniques with modern luxury.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-black"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-primary"
              onClick={handleBookExperience}
            >
              Book Your Experience
            </button>
          </div>

          {/* Right Content - Video/Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-luxury">
            <Image
              src="/images/signature-experience.jpg"
              alt="Signature barbershop experience"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-primary text-2xl">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 