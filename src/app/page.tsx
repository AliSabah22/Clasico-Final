"use client";

import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Services from "../components/sections/Services";
import SignatureExperience from "../components/SignatureExperience";
import Testimonials from "../components/sections/Testimonials";
import ContentGallery from "../components/ContentGallery";
import Footer from "../components/Footer";
import Gallery from '../components/sections/Gallery';
import dynamic from 'next/dynamic';
import LoadingState from '../components/ui/LoadingState'
import { scrollToSection } from '../utils/scroll';
import RobustImage from '../components/ui/RobustImage';

// Dynamically import the Booking component with no SSR
const Booking = dynamic(() => import('../components/sections/Booking'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <LoadingState size="lg" />
    </div>
  ),
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

export default function Home() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex overflow-hidden pt-24 md:pt-32">
        {/* Left Side - Content with Background Image */}
        <div className="w-1/2 relative flex items-center justify-center">
          <RobustImage
            src="/images/hero/hero-bg.jpeg"
            alt="Luxury barbershop interior"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            priority
            loadingStrategy="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="text-left px-12 max-w-lg relative z-10">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 font-bold"
            >
              Redefine Your Look
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-10"
            >
              Where precision meets luxury. Experience the art of grooming in its purest form.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={handleBookNow}
                className="btn-primary text-xl px-10 py-4"
              >
                Book Your Appointment
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Brand Image */}
        <div className="w-1/2 bg-black flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full max-w-sm"
          >
            <RobustImage
              src="/images/logo.jpg"
              alt="Clasico Barbershop Brand"
              width={400}
              height={400}
              className="object-contain w-full h-full max-w-sm"
              priority
              loadingStrategy="eager"
              fallbackSrc="/images/logo.jpg"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      <Services />
      <SignatureExperience />
      <Testimonials />
      <Gallery />
      <Booking />
    </>
  );
}

const features = [
  {
    title: "Expert Barbers",
    description: "Our team of skilled professionals brings years of experience and passion to every cut.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Premium Products",
    description: "We use only the finest grooming products to ensure the best results for your hair and skin.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Relaxing Atmosphere",
    description: "Enjoy a comfortable, sophisticated environment designed for your complete relaxation.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];
