import { icons } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomButton from "./shared/CustomButton";

const Navbar = () => {
  return (
    <div className={`w-full px-4`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
        <div>
          <Image
            src={icons.logo}
            width={80}
            alt="Logo"
            className="cursor-pointer"
          />
        </div>
        <div className="flex text-sm items-center gap-6  font-normal text-black ">
          <a href="#calculate" className="text-sm text-rich-black cursor-pointer  hover:scale-105 hover:text-red-pantone transition duration-150 ease-in-out">
             Calculate
          </a>
          <div className=" border-r border-gray-200 h-8"></div>
          <div className="text-sm text-red-600 cursor-pointer  hover:scale-105 hover:text-rich-black transition duration-150 ease-in-out">
            Save Memory
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
