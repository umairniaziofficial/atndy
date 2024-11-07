import React from 'react';
import Head from 'next/head';
import "./global.css";
import { Inter } from 'next/font/google';

export const meta = {
    title: 'Semester Absence Tracker',
    description: 'Keep track of your semester absences and manage your absence requests',
    keywords: 'semester absence tracker, absence management, semester planning',
}

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

      </Head>
      <body className={`min-h-screen w-screen ${inter.className}`}>
          {children}
      </body>
    </html>
  );
}

export default Layout;
