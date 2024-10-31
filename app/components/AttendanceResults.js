import Image from "next/image";
import React from "react";
import SearchingImage from "./../assets/gif/Searching.gif";

const AttendanceResults = ({ data }) => {
  return (
    <div className="w-full flex justify-center items-center">
      {data.length > 0 ? (
        "Results: ..."
      ) : (
       <div className="hidden md:block">
          <Image
            src={SearchingImage}
            width={500}
            height={500}
            alt="Running animation"
            className="max-w-full h-auto px-4"
            priority
          />
       </div>
      )}
    </div>
  );
};

export default AttendanceResults;
