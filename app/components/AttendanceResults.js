import React from "react";

const AttendanceResults = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 md:w-1/2 items-center md:items-start text-center md:text-left text-gray-100 rounded-xl border px-6 py-6 bg-gray-900">
      <h1 className="font-extrabold text-3xl text-white">Attendance Calculator</h1>

      {Object.keys(data).length > 0 && (
        <div className="flex flex-col gap-2 w-full h-full">
          <div className="flex flex-col md:flex-row gap-4 w-full text-gray-200">
            <div className="font-extrabold w-full">
              <span className="font-semibold">
                {data.courseName} at {data.universityName}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full text-xs text-gray-400">
            <div>
              <span className="font-semibold">From:</span> <span>{data.semesterStartDate}</span>
            </div>
            <div>
              <span className="font-semibold">End:</span> <span>{data.semesterEndDate}</span>
            </div>
            <div>
              <span className="font-semibold">Unattended:</span> <span>{data.unattended || 0}</span>
            </div>
          </div>
          <div className="flex w-full h-[60%] items-center justify-center">
            <div className="text-white font-extrabold flex items-end gap-2">
              <div className="text-8xl">76</div>
              <div className="text-xs">Classes Missed</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm text-gray-200 font-semibold tracking-wider">More Info</h1>
            <div className="text-xs">
              <div>
                The{" "}
                <span className="font-extrabold">{data.courseName} {data.courseType}</span> course {" "}
                <span className="font-semibold">({data.creditHours} {data.creditHours > 1 ? "credits" : "credit"}) </span>includes{" "}
                <span className="font-bold">XXX</span> classes and{" "}
                <span className="font-bold">XXX</span> credit hours. You can miss{" "}
                <span className="font-bold">XXX</span> classes and still maintain 75% attendance.
                Total classes this semester:{" "}
                <span className="font-bold">XXX</span> over{" "}
                <span className="font-bold">XXX</span> working days.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceResults;

