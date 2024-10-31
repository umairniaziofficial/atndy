import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AttendanceTracker from './components/AttendenceTracker';
import InfoSection from './components/InfoSection';

const Page = () => {
  return (
     <div>
      <Navbar/>
      <Banner/>
      <InfoSection/>
      <AttendanceTracker/>
     </div>
  );
}

export default Page;
