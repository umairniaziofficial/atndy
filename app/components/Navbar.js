import { icons } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomButton from "./shared/CustomButton";


const Navbar = () => {
  return (
    <div className={`w-full px-4 `}>
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
        <div>
          <Image
            src={icons.logo}
            width={80}
            alt="Logo"
            className="cursor-pointer"
          />
        </div>
       <div className="flex text-sm items-center gap-6  font-normal text-black">
          <div>Calculate</div>
          <div className=" border-r border-gray-200 h-8"></div>
          <CustomButton title={"Save Memory"} extra_style={"text-red-pantone "}/>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
