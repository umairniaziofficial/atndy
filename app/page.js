import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AttendanceTracker from './components/AttendenceTracker';
import InfoSection from './components/InfoSection';
import Mission from './components/Mission';

const Page = () => {
  return (
     <div>
      <Navbar/>
      <Banner/>
      <InfoSection/>
      <AttendanceTracker/>
      <Mission/>
     </div>
  );
}

export default Page;
