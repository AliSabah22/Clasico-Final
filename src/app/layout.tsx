import './globals.css';
import Navigation from '@/components/Navigation';
import React from 'react';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

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
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
