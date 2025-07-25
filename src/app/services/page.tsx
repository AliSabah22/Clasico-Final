"use client";

import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white pt-24">
        <div className="container-custom py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display text-black mb-6">
              Our Services
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              From classic cuts to modern styles, we offer a comprehensive range of grooming services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border">
                <div>
                  <h3 className="text-2xl font-display text-black mb-2">Haircut</h3>
                  <p className="text-black/70">Professional haircut tailored to your style and preferences. Includes consultation, wash, cut, and style.</p>
                </div>
                <div className="text-right">
                  <p className="text-gold font-semibold text-2xl">$35</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border">
                <div>
                  <h3 className="text-2xl font-display text-black mb-2">Beard Trim</h3>
                  <p className="text-black/70">Precision beard trimming and shaping to maintain your desired look and style.</p>
                </div>
                <div className="text-right">
                  <p className="text-gold font-semibold text-2xl">$25</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border">
                <div>
                  <h3 className="text-2xl font-display text-black mb-2">Hot Shave</h3>
                  <p className="text-black/70">Traditional straight razor shave with hot towels and premium shaving products.</p>
                </div>
                <div className="text-right">
                  <p className="text-gold font-semibold text-2xl">$40</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border">
                <div>
                  <h3 className="text-2xl font-display text-black mb-2">Haircut & Beard</h3>
                  <p className="text-black/70">Complete grooming package including haircut and beard trim for the ultimate look.</p>
                </div>
                <div className="text-right">
                  <p className="text-gold font-semibold text-2xl">$50</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border">
                <div>
                  <h3 className="text-2xl font-display text-black mb-2">Kids Haircut</h3>
                  <p className="text-black/70">Specialized haircuts for children, ensuring a comfortable and enjoyable experience.</p>
                </div>
                <div className="text-right">
                  <p className="text-gold font-semibold text-2xl">$25</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border">
                <div>
                  <h3 className="text-2xl font-display text-black mb-2">Consultation</h3>
                  <p className="text-black/70">Free consultation to discuss your style preferences and get personalized recommendations.</p>
                </div>
                <div className="text-right">
                  <p className="text-gold font-semibold text-2xl">Free</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => window.open('https://booking.cojilio.com/clasicobarbershop', '_blank')}
                className="bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-200 text-lg"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
} 