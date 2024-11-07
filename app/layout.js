import React from 'react';
import "./global.css";
import { Inter } from 'next/font/google';

export const metadata = {
    title: 'Semester Absence Tracker',
    description: 'Keep track of your semester absences and manage your absence requests',
    keywords: 'semester absence tracker, absence management, semester planning',
};

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        {/* Favicon links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
     
      </head>
      <body className={`min-h-screen w-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}

export default Layout;
