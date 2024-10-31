import Image from "next/image";
import React from "react";
import MissionGif from "./../assets/gif/Mission.gif";

const Mission = () => {
  return (
    <div className="w-full px-4 overflow-hidden bg-baby-powder pb-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-3xl border border-rich-black bg-rich-black p-6">
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
          <h2 className="text-3xl font-extrabold text-baby-powder mb-4 ">Our Mission</h2>
          <p className="text-base text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolor ratione corporis praesentium nostrum inventore ipsam.
            Exercitationem incidunt odit eveniet. Perferendis saepe assumenda
            nulla laudantium corporis nisi dicta, sit ullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
