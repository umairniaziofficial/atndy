import React from "react";
import CustomButton from "./shared/CustomButton";
import Image from "next/image";
import runningGif from "../assets/gif/Running.gif";

const Banner = () => {
  return (
    <div className="w-full px-4 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 md:py-24">
        <div className="flex flex-col gap-5 md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold w-full md:w-4/5 leading-tight">
            Semester <span className="text-red-pantone">Absence</span> Tracker
          </h1>
          <p className="text-gray-400 text-sm md:text-base pb-4">
            Keep track of your semester absences and manage your absence requests.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
            <CustomButton 
              title="Calculate" 
              borders={true} 
              extra_style="border-rich-black hover:text-white hover:bg-rich-black transition-colors duration-300 ease-in-out" 
              aria-label="Calculate your absences"
            />
            <CustomButton
              title="Learn More"
              borders={true}
              extra_style="text-black border-red-pantone hover:text-white hover:bg-red-pantone transition-colors duration-300 ease-in-out"
              aria-label="Learn more about absence tracking"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end overflow-hidden">
          <Image 
            src={runningGif} 
            width={400} 
            height={400} 
            alt="Running animation" 
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
