"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gold/20 shadow-sm ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <div className="container-custom">
        <div className="relative flex items-center justify-between py-3 md:py-6">
          {/* Left: Barbershop Name - Mobile optimized */}
          <div className="flex-1 flex items-center min-w-0">
            <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-display text-gold tracking-wide z-10 pl-2 md:pl-4 whitespace-nowrap">
              <span className="hidden sm:inline">Clasico Barbershop</span>
              <span className="sm:hidden">Clasico</span>
            </Link>
          </div>

          {/* Center: Logo - Mobile optimized */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">
            <Link href="/" className="touch-manipulation">
              <Image
                src="/images/logo.png"
                alt="Clasico Barbershop Logo"
                width={240}
                height={240}
                priority
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 w-auto drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-6 pr-4 md:pr-8 z-10">
            <Link href="/services" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              Contact
            </Link>
            <button 
              onClick={handleBookNow}
              className="ml-2 bg-white text-black hover:bg-gold hover:text-white px-6 py-2 rounded-md font-semibold shadow-gold transition-all touch-manipulation"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced touch target */}
          <button
            className="md:hidden text-gold absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced with CSS transitions */}
      <div 
        className={`md:hidden bg-black/98 backdrop-blur-md border-t border-gold/20 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-6 space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/services"
              className="block text-gold hover:text-gold/80 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block text-gold hover:text-gold/80 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="block text-gold hover:text-gold/80 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gold hover:text-gold/80 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          
          <div className="pt-4 border-t border-gold/20">
            <button 
              onClick={() => {
                handleBookNow();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-white text-black hover:bg-gold hover:text-white px-6 py-4 rounded-lg font-semibold shadow-gold transition-all touch-manipulation text-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
