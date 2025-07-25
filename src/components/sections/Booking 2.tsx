'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Booking() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the finest grooming services in town. 
            Our expert barbers are ready to give you the perfect cut.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNow}
            className="bg-gold text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            Book Your Appointment
          </motion.button>
          
          <p className="text-sm text-gray-400 mt-6">
            Easy online booking • Flexible scheduling • Professional service
          </p>
        </motion.div>
      </div>
    </section>
  );
} 