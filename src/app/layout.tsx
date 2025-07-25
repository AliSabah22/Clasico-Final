import './globals.css';
import Navigation from '@/components/Navigation';
import React from 'react';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import ImagePreloader from '@/components/ImagePreloader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Clasico Barbershop</title>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11551450864"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11551450864');
          `}
        </Script>
        {/* LocalBusiness Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Barbershop",
              "name": "Clasico Barbershop",
              "image": "https://clasicobarber.com/images/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3480 Platinum Dr Unit 105",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "postalCode": "L5M 2S4",
                "addressCountry": "CA"
              },
              "telephone": "+1-647-559-4641",
              "url": "https://clasicobarber.com",
              "sameAs": [
                "https://www.instagram.com/clasicobarbershop105/",
                "https://www.google.com/maps/place/Clasico+Barbershop"
              ],
              "openingHours": "Mo-Su 10:00-22:00"
            })
          }}
        />
      </head>
      <body>
        <ImagePreloader />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
