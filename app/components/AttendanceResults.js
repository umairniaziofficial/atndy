import React from "react";

const AttendanceResults = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 md:w-1/2 items-center md:items-start text-centermd:text-left  text-gray-100 rounded-xl">
      <h1 className="font-extrabold text-3xl text-rich-black">
        Attendance Calculator
      </h1>

      {Object.keys(data).length > 0 && (
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col md:flex-row gap-4 w-full text-gray-200">
            <div className="font-extrabold w-full">
              <span className="font-semibold">{data.courseName} at {data.universityName}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full text-xs">
            <div className="w-full md:w-1/2 flex gap-5 text-gray-400 ">
              <div>
                <span className="font-semibold">From:</span>{" "}
                <span className="font-xs">{data.semesterStartDate}</span>
              </div>
              <div>
                <span className="font-semibold"> End Date:</span>{" "}
                <span className="font-normal">{data.semesterEndDate}</span>
              </div>
            </div>
          </div>

          {/* Unattended Classes */}
          <div className="w-full">
            Unattended Classes:{" "}
            <span className="font-normal">
              {data.unattended === "" ? 0 : data.unattended}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceResults;
