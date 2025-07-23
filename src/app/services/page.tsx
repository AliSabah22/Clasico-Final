"use client";

import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import RobustImage from "../../components/ui/RobustImage";

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <RobustImage
          src="/images/services/service2.jpg"
          alt="Clasico Barbershop Services"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
          loadingStrategy="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Precision grooming for the modern gentleman. Explore our menu of premium services.
          </motion.p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-black mb-6">
              Premium Services
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              From classic cuts to modern styles, we offer a comprehensive range of grooming services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Haircut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-black mb-2">Haircut</h3>
                <p className="text-gold font-semibold text-lg">$35</p>
              </div>
              <p className="text-black/70 text-center">
                Professional haircut tailored to your style and preferences. Includes consultation, wash, cut, and style.
              </p>
            </motion.div>

            {/* Beard Trim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-black mb-2">Beard Trim</h3>
                <p className="text-gold font-semibold text-lg">$25</p>
              </div>
              <p className="text-black/70 text-center">
                Precision beard trimming and shaping to maintain your desired look and style.
              </p>
            </motion.div>

            {/* Hot Shave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-black mb-2">Hot Shave</h3>
                <p className="text-gold font-semibold text-lg">$40</p>
              </div>
              <p className="text-black/70 text-center">
                Traditional straight razor shave with hot towels and premium shaving products.
              </p>
            </motion.div>

            {/* Haircut & Beard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-black mb-2">Haircut & Beard</h3>
                <p className="text-gold font-semibold text-lg">$50</p>
              </div>
              <p className="text-black/70 text-center">
                Complete grooming package including haircut and beard trim for the ultimate look.
              </p>
            </motion.div>

            {/* Kids Haircut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-black mb-2">Kids Haircut</h3>
                <p className="text-gold font-semibold text-lg">$25</p>
              </div>
              <p className="text-black/70 text-center">
                Specialized haircuts for children, ensuring a comfortable and enjoyable experience.
              </p>
            </motion.div>

            {/* Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-black mb-2">Consultation</h3>
                <p className="text-gold font-semibold text-lg">Free</p>
              </div>
              <p className="text-black/70 text-center">
                Free consultation to discuss your style preferences and get personalized recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the Clasico difference.
          </p>
          <button
            onClick={() => window.open('https://booking.cojilio.com/clasicobarbershop', '_blank')}
            className="bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-200 text-lg"
          >
            Book Appointment
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
} 