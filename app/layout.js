import React from 'react';
import "./global.css";
import { Inter } from 'next/font/google';

export const metadata = {
    title: 'Semester Absence Tracker',
    description: 'Keep track of your semester absences and manage your absence requests',
    keywords: 'semester absence tracker, absence management, semester planning',
}

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`min-h-screen w-screen ${inter.className}`}>
          {children}
      </body>
    </html>
  );
}

export default Layout;
