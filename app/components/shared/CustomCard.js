import Image from "next/image";
import React from "react";

const CustomCard = ({ icon, heading, text, title, number, width }) => {
  return (  
    <div className="overflow-hidden w-full flex justify-center md:px-0 px-12">
      <div className="w-full bg-white shadow-xl p-9 flex flex-col justify-between h-72 relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
        <div className="w-24 h-24 bg-rich-black rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
        </div>
        <div className="fill-violet-500 w-12 mb-6">
          <Image src={icon} height={40} width={width} alt={`${title} logo`} />
        </div>
        <h1 className="font-bold text-xl">{heading}</h1>
        <p className="text-sm text-zinc-500 leading-6 flex-grow">{text}</p>
      </div>
    </div>
  );
};

export default CustomCard;
