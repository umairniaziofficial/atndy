import React from "react";
import Collab from "./../assets/gif/Collab.gif";
import Image from "next/image";
import CustomButton from "./shared/CustomButton";

const Collabration = () => {
  return (
    <div className="w-full px-4 overflow-hidden bg-baby-powder ">
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8 md:gap-12 py-16 md:py-24 md:pb-48">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-rich-black mb-4">
            Collaboration
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            At <span className="font-extrabold text-rich-black">atndy</span>, we believe in the power of working together to solve problems and innovate. Our platform is built with an open-source spirit, encouraging collaboration and shared learning.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Join us on this journey to make tools more accessible and impactful. Every contribution brings us closer to creating solutions that matter. 
          </p>
          <a href="https://github.com/umairniaziofficial/atndy.git" target="_blank" rel="noopener noreferrer">
            <CustomButton
              title="View on GitHub"
              borders={true}
              extra_style="border-rich-black bg-white text-rich-black hover:bg-rich-black hover:text-white transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={Collab}
            alt="Collaboration Image"
            width={400}
            height={400}
            className="transform scale-x-[-1] max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Collabration;
