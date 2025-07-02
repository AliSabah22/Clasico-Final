"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";

// Force dynamic rendering to prevent build timeout
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TeamPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay to prevent SSR issues
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
      {
    name: "Nemar",
    role: "The Clipperhands",
    experience: "8+ Years",
    image: "/team/nemar.jpeg?v=2"
  },
  {
    name: "Humam",
    role: "The Fade Technician",
    experience: "3+ Years", 
    image: "/team/humam.jpeg?v=2"
  },
  {
    name: "Ali",
    role: "Mr.Scissorhands",
    experience: "8+ Years",
    image: "/team/ali.jpeg?v=2"
  },
  {
    name: "Akram",
    role: "The Style Master",
    experience: "5+ Years",
    image: "/team/akram.jpeg?v=2"
  }
];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Meet Our Team
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
                Our skilled professionals are passionate about their craft
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-[32rem]">
                    {imagesLoaded && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                        loading="lazy"
                        onError={(e) => {
                          console.error(`Failed to load team member image: ${member.image}`);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded team member image: ${member.image}`);
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display mb-2 text-black">{member.name}</h3>
                    <p className="text-gold font-semibold mb-3">{member.role}</p>
                    <div className="space-y-2 text-sm text-black/70">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-gold" />
                        <span>{member.experience} Experience</span>
                      </div>
                      </div>
                    </div>
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