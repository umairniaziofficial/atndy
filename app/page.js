import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AttendanceTracker from './components/AttendenceTracker';
import InfoSection from './components/InfoSection';
import Mission from './components/Mission';
import Collabration from './components/Collabration';
import CompaniesDiv from './components/CompaniesDiv';

const Page = () => {
  return (
     <div>
      <Navbar/>
      <Banner/>
      <InfoSection/>
      <AttendanceTracker/>
      <Mission/>
      <CompaniesDiv/>
      <Collabration/>
     </div>
  );
}

export default Page;
