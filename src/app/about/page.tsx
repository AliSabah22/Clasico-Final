import React from "react";
import Image from "next/image";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nemar",
      role: "The Clipperhands",
      experience: "8+ Years",
      image: "/team/Nemar.jpeg"
    },
    {
      name: "Humam",
      role: "The Fade Technician",
      experience: "3+ Years", 
      image: "/team/humam.jpeg"
    },
    {
      name: "Ali",
      role: "Mr.Scissorhands",
      experience: "8+ Years",
      image: "/team/Ali.jpeg"
    },
    {
      name: "Akram",
      role: "The Style Master",
      experience: "5+ Years",
      image: "/team/Akram.jpeg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="About Clasico Barbershop"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display text-white mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-delay">
            Discover the story, values, and people behind Clasico Barbershop.
          </p>
        </div>
      </section>

      {/* About the Shop Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-black">
              Our Story
            </h2>
            <p className="text-xl text-black/70 max-w-4xl mx-auto leading-relaxed">
              Founded in 2022, Clasico Barbershop has been the premier destination for men's grooming in our community. 
              We blend traditional barbering techniques with modern luxury to create an experience that goes beyond just a haircut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-display mb-6 text-black">Our Mission</h3>
              <p className="text-black/80 mb-6 leading-relaxed">
                At Clasico Barbershop, we believe that every man deserves to look and feel his best. Our mission is to provide 
                exceptional grooming services in a welcoming, sophisticated environment where tradition meets innovation.
              </p>
              <p className="text-black/80 mb-8 leading-relaxed">
                We take pride in our attention to detail, commitment to quality, and the relationships we build with our clients. 
                Every visit is an opportunity to transform not just your appearance, but your confidence.
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
              <Image
                src="/team/team.jpeg"
                alt="Clasico Barbershop Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-black">
              Our Values
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              The principles that guide everything we do at Clasico Barbershop
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in every cut, every service, and every interaction with our clients."
              },
              {
                title: "Tradition",
                description: "We honor the timeless art of barbering while embracing modern techniques and trends."
              },
              {
                title: "Community",
                description: "We're more than a barbershop - we're a gathering place for men to connect and share stories."
              }
            ].map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-8 bg-gray-50 rounded-xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-display mb-4 text-black">{value.title}</h3>
                <p className="text-black/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display mb-2 text-black">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm text-black/70">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{member.experience} Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-white/80">3480 Platinum Dr., Unit 105<br />Mississauga, ON L5M 2S4</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-white/80">Mon-Sat: 10AM-10PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/80">(905) 607-4400<br />hello@clasicobarbershop.com</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 