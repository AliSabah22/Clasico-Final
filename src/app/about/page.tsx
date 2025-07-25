"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";
import RobustImage from "../../components/ui/RobustImage";

export default function AboutPage() {
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
      role: "Master Barber",
      image: "/team/nemar.jpeg",
      bio: "With over 8 years of experience, Nemar specializes in classic cuts and modern fades.",
    },
    {
      name: "Ali",
      role: "Senior Stylist",
      image: "/team/ali.jpeg",
      bio: "Ali brings creativity and precision to every cut, with expertise in contemporary styles.",
    },
    {
      name: "Humam",
      role: "Beard Specialist",
      image: "/team/humam.jpeg",
      bio: "Humam is our go-to expert for beard grooming and straight razor shaves.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* About the Shop Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-display text-black">
                  Our Story
                </h2>
                <p className="text-lg text-black/70 leading-relaxed">
                  Founded in 2010, Clasico Barbershop has been the premier destination for men's grooming in Mississauga. 
                  We combine traditional barbering techniques with modern styling to create the perfect look for every client.
                </p>
                <p className="text-lg text-black/70 leading-relaxed">
                  Our commitment to excellence, attention to detail, and passion for the craft has made us a trusted name 
                  in the community. We believe that every man deserves to look and feel his best.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                    <div className="text-sm text-black/70">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">10K+</div>
                    <div className="text-sm text-black/70">Happy Clients</div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-fade-in-right">
                {imagesLoaded && (
                  <RobustImage
                    src="/team/team.jpeg"
                    alt="Clasico Barbershop Interior"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    loadingStrategy="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-black">
                Our Values
              </h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto">
                The principles that guide everything we do at Clasico Barbershop.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-black mb-3">Quality</h3>
                <p className="text-black/70">
                  We never compromise on quality. Every cut, every shave, every service is delivered with the highest standards.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-black mb-3">Community</h3>
                <p className="text-black/70">
                  We're more than just a barbershop. We're a community hub where friendships are formed and stories are shared.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-black mb-3">Innovation</h3>
                <p className="text-black/70">
                  We stay ahead of trends while respecting traditional techniques, offering the best of both worlds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-black">
                Meet the Team
              </h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto">
                Our skilled professionals are passionate about their craft and dedicated to providing you with the best grooming experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-[32rem]">
                    {imagesLoaded && (
                      <RobustImage
                        src={member.image}
                        alt={member.name}
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        loadingStrategy="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display text-black mb-2">{member.name}</h3>
                    <p className="text-gold font-semibold mb-3">{member.role}</p>
                    <p className="text-black/70">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 