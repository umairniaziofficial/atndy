import Image from "next/image";
import React from "react";
import MissionGif from "./../assets/gif/Mission.gif";

const Mission = () => {
  return (
    <div className="w-full px-4 overflow-hidden bg-baby-powder py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-3xl border border-rich-black bg-rich-black p-6 ">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src={MissionGif}
            alt="Mission gif"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-baby-powder mb-4">Our Mission</h2>
          <p className="text-base text-gray-200 leading-relaxed">
            At <span className="text-green-50 font-extrabold">atndy</span>, our mission is to guide students in managing their attendance effectively. We believe that understanding the maximum allowable absences in a semester is crucial for academic success. 
          </p>
          <p className="text-base text-gray-200 leading-relaxed pt-3">
            By providing tools and resources, we empower students to maintain a balance between their personal commitments and educational responsibilities, fostering a culture of accountability and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
