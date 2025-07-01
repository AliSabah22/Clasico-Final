"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "James Wilson",
    role: "Regular Client",
    image: "/images/testimonials/client1.jpg",
    quote: "The attention to detail and level of service at Clasico is unmatched. Every visit feels like a premium experience.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Professional",
    image: "/images/testimonials/client2.jpg",
    quote: "I've been to many barbershops, but Clasico stands out with their exceptional service and luxurious atmosphere.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Fashion Designer",
    image: "/images/testimonials/client3.jpg",
    quote: "The barbers here are true artists. They understand exactly what you want and deliver beyond expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience at Clasico
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              key={currentIndex}
              className="flex flex-col items-center transition-all duration-500"
            >
              <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>

              <blockquote className="text-xl text-center mb-6 max-w-2xl">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="text-center">
                <p className="font-display text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 