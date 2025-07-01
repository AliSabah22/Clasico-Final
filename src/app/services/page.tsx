"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Scissors, Star, Droplet } from "lucide-react";

const serviceCategories = [
  {
    name: "Hair & Beard",
    icon: <Scissors className="w-8 h-8 text-yellow-500" />,
    services: [
      { name: "Haircut (Taper, Zero Fade, Skin Fade)", price: 30 },
      { name: "Senior haircut (+60)", price: 24 },
      { name: "Student haircut", price: 28.49 },
      { name: "Kids haircut (5 and under)", price: 25 },
      { name: "Kids haircut (zero fade)", price: 30 },
      { name: "Haircut & beard trim", price: 45 },
      { name: "Haircut & beard trim line up (blade)", price: 50 },
      { name: "Haircut & beard trim Line-up (machine)", price: 47 },
      { name: "Haircut & line-up beard (blade)", price: 39.99 },
      { name: "Haircut & line-up (machine)", price: 38.45 },
      { name: "Haircut & beard hot towel shave (blade)", price: 47.99 },
      { name: "Scissor cut", price: 33.25 },
      { name: "Buzzcut", price: 24.99 },
      { name: "Buzzcut & Skin Fade", price: 30 },
      { name: "Line-up, hair & beard (blade)", price: 20 },
    ]
  },
  {
    name: "Fades",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    services: [
      { name: "Side fade & beard trim", price: 37.99 },
      { name: "Side fade & beard trim line-up (blade)", price: 47.99 },
      { name: "Side fade & beard trim line-up (machine)", price: 45 },
      { name: "Side fade & line-up beard (blade)", price: 35 },
      { name: "Side fade & line-up beard (machine)", price: 33.65 },
      { name: "Side fade & beard hot tower shave (blade)", price: 47.75 },
      { name: "Buzz cut & beard trim line-up (blade)", price: 50 },
      { name: "Buzz cut & beard trim line-up (machine)", price: 47.50 },
      { name: "Shampoo & wash", price: 5 },
      { name: "Full shave with hot towel (head)", price: 35 },
      { name: "Hair design", price: "6 & up" },
      { name: "Hair styling", price: 15 },
    ]
  },
  {
    name: "Face Waxing",
    icon: <Droplet className="w-8 h-8 text-yellow-500" />,
    services: [
        { name: "Ears wax or threading", price: 10 },
        { name: "Nose waxing", price: 10 },
        { name: "Unibrow threading", price: 7 },
        { name: "Eyebrows waxing", price: 15 },
        { name: "Eyebrows shaping (blade)", price: 10 },
        { name: "Forehead wax or threading", price: 8 },
        { name: "Cheeks wax or threading", price: 10 },
        { name: "Full face wax or threading", price: 30 },
        { name: "Beard line-up wax or threading", price: 15 },
        { name: "Facial (steam, hot towel, black mask and more)", price: 55 },
    ]
  },
  {
    name: "Beard Services",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    services: [
        { name: "Beard trim", price: 15 },
        { name: "Beard trim (scissors)", price: 15 },
        { name: "Line-up beard (blade)", price: 10 },
        { name: "Line-up beard (machine)", price: 8.99 },
        { name: "Beard trim line-up (blade)", price: 25 },
        { name: "Beard trim line-up (machine)", price: 24 },
        { name: "Hot towel", price: 5 },
        { name: "Beard Hot towel shave (blade)", price: 30 },
        { name: "Hair dye", price: 45 },
        { name: "Beard dye (colouring)", price: 24 },
        { name: "Moustache dye (colouring)", price: 7 },
        { name: "Moustache trim", price: 5 },
        { name: "Steam face shave", price: 35 },
        { name: "Beard trim line up (blade) and hot tower", price: 28.50 },
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden -mt-20">
        <Image
          src="/images/services/service2.jpg"
          alt="Clasico Barbershop Services"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-display ml-4 text-black">{category.name}</h2>
                </div>
                <ul className="space-y-4 flex-grow">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex justify-between items-start border-b border-gray-200 pb-3">
                      <span className="text-black/80 pr-2">{service.name}</span>
                      <span className="font-semibold text-black text-right whitespace-nowrap">
                        {typeof service.price === 'number' ? `$${service.price.toFixed(2)}` : service.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 