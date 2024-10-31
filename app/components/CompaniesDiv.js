import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const CompaniesDiv = () => {
  const imagesSrc = {
    images: [images.air, images.fast, images.numl, images.comsats, images.federalUrdu, images.riphah],
  };

  return (
    <div className="w-full px-4 overflow-hidden flex justify-center items-center py-16 md:py-24 ">
      <div className="w-full grid grid-cols-2 place-items-center md:flex md:flex-row md:justify-evenly max-w-7xl mx-auto gap-5">
        {imagesSrc.images.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Company Logo"
            width={100}
            height={100}
            className="brightness-95 contrast-125 hover:scale-105 transition duration-150 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesDiv;
  