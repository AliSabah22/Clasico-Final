"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RobustImage from './ui/RobustImage';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <RobustImage
                src="/images/logo.jpg"
                alt="Clasico Barbershop Logo"
                width={240}
                height={240}
                priority
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 w-auto drop-shadow-lg"
                loadingStrategy="eager"
              />
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Services
              </Link>
              <Link href="/team" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Team
              </Link>
              <Link href="/gallery" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Gallery
              </Link>
              <Link href="/contact" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:text-gold transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gold/20">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="mobile-nav-item text-white hover:text-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="mobile-nav-item text-white hover:text-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="mobile-nav-item text-white hover:text-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/team"
                className="mobile-nav-item text-white hover:text-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/gallery"
                className="mobile-nav-item text-white hover:text-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="mobile-nav-item text-white hover:text-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
