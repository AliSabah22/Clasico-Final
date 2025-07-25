"use client";

import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Nemar",
    role: "Master Barber",
    image: "/team/nemar.jpeg?v=2",
    bio: "With over 8 years of experience, Nemar specializes in classic cuts and modern fades.",
  },
  {
    name: "Ali",
    role: "Senior Stylist",
    image: "/team/ali.jpeg?v=2",
    bio: "Ali brings creativity and precision to every cut, with expertise in contemporary styles.",
  },
  {
    name: "Humam",
    role: "Beard Specialist",
    image: "/team/humam.jpeg?v=2",
    bio: "Humam is our go-to expert for beard grooming and straight razor shaves.",
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    console.error(`Failed to load team member image: ${member.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded team member image: ${member.image}`);
                  }}
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