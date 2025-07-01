"use client";

import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Smith",
    role: "Master Barber",
    image: "/images/barber1.jpg",
    bio: "With over 15 years of experience, John specializes in classic cuts and modern fades.",
  },
  {
    name: "Mike Johnson",
    role: "Senior Stylist",
    image: "/images/barber2.jpg",
    bio: "Mike brings creativity and precision to every cut, with expertise in contemporary styles.",
  },
  {
    name: "David Wilson",
    role: "Beard Specialist",
    image: "/images/barber3.jpg",
    bio: "David is our go-to expert for beard grooming and straight razor shaves.",
  },
];

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <div
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-white">
            Our Story
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Founded in 2010, Clasico Barbershop has been providing exceptional grooming
            services with a focus on quality, tradition, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-display text-white mb-2">{member.name}</h3>
              <p className="text-gold mb-4">{member.role}</p>
              <p className="text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 