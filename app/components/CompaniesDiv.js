import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const CompaniesDiv = () => {
  const imagesSrc = {
    images: [images.air, images.fast, images.numl,images.comsats,images.federalUrdu,images.riphah],
  };
  return (
    <div className="w-full px-4 overflow-hidden flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly py-16 max-w-7xl mx-auto gap-5">
        {imagesSrc.images.map((item, index) => {
          return (
            <Image
              key={index}
              src={item}
              alt="Company Logo"
              width={100}
              height={100}
              className={"brightness-95 contrast-125 hover:scale-105 transition duration-150 ease-in-out"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesDiv;
