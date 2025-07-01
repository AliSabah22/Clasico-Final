import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-display mb-4">Clasico</h3>
            <p className="text-white/80 mb-6">
              Where style meets legacy. Experience the art of grooming in its purest form.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com/clasicobarbershop105" icon="instagram" />
              <SocialLink href="https://tiktok.com/@clasicobarbershop105" icon="tiktok" />
              <SocialLink href="https://www.google.com/maps/place/Clasico+Barbershop/@43.5368295,-79.7284705,17z/data=!3m1!4b1!4m6!3m5!1s0x882b435d5ac69bdb:0x1d64851813c3eec8!8m2!3d43.5368256!4d-79.7258956!16s%2Fg%2F11ssz5f8p8?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" icon="google" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-lg font-display mb-4">Visit Us</h4>
            <address className="not-italic text-white/80 mb-4">
              3480 Platinum Dr Unit 105,<br />
              Mississauga, ON L5M 2S4
            </address>
            <div className="space-y-2">
              <p className="text-white/80">
                <span className="font-medium">Hours:</span><br />
                Monday - Sunday: 10am - 10pm
              </p>
              <p className="text-white/80">
                <span className="font-medium">Phone:</span> 905 607 4400
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-display mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                         focus:outline-none focus:border-accent text-white placeholder-white/50"
              />
              <button
                className="w-full btn-primary hover:scale-105 transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Clasico Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                 hover:bg-accent transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{icon}</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {icon === 'instagram' && (
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        )}
        {icon === 'tiktok' && (
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        )}
        {icon === 'google' && (
          <path d="M21.35 11.1h-9.18v2.92h5.98c-.26 1.36-1.56 4-5.98 4-3.6 0-6.54-2.98-6.54-6.65s2.94-6.65 6.54-6.65c2.05 0 3.43.82 4.22 1.53l2.88-2.8C17.13 2.7 14.97 1.7 12.5 1.7 6.7 1.7 2 6.18 2 12s4.7 10.3 10.5 10.3c6.06 0 10.06-4.25 10.06-10.25 0-.69-.08-1.22-.21-1.75z" />
        )}
      </svg>
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/80 hover:text-accent transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
} 