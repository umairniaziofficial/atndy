import React from "react";

const calculateWorkingDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let workingDays = 0;

  const current = new Date(start);
  while (current <= end) {
    const dayOfWeek = current.getDay();

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      workingDays++;
    }
    current.setDate(current.getDate() + 1);
  }
  return workingDays;
};

const calculateLabDetails = (workingDays, unattended) => {
  const regularClasses = Math.ceil(workingDays / 7);
  const totalClassesWithMakeup = regularClasses + (parseInt(unattended) || 0);
  const hoursPerSession = 3;
  const totalHours = totalClassesWithMakeup * hoursPerSession;

  return {
    regularClasses,
    totalClassesWithMakeup,
    classesPerWeek: 1,
    totalHours,
    hoursPerSession,
  };
};

const calculateAttendanceRequirements = (totalClasses, studentAbsences) => {
  const requiredAttendance = Math.ceil(totalClasses * 0.75);
  const maxMissableClasses = totalClasses - requiredAttendance;
  const remainingAbsences =
    maxMissableClasses - (parseInt(studentAbsences) || 0);
  const currentAttendancePercentage = (
    ((totalClasses - (parseInt(studentAbsences) || 0)) / totalClasses) *
    100
  ).toFixed(1);

  return {
    requiredAttendance,
    maxMissableClasses,
    remainingAbsences,
    currentAttendancePercentage,
  };
};

const calculateTheoryDetails = (workingDays, creditHours, unattended) => {
  const classesPerWeek = creditHours;
  const totalClasses = classesPerWeek * Math.ceil(workingDays / 7);
  const totalClassesWithMakeup = totalClasses + (parseInt(unattended) || 0);
  const hoursPerSession = 1;
  const totalHours = totalClassesWithMakeup * hoursPerSession;

  return {
    regularClasses: totalClasses,
    totalClassesWithMakeup,
    classesPerWeek,
    totalHours,
    hoursPerSession,
  };
};

const AttendanceResults = ({ data }) => {
  const workingDays =
    data.semesterStartDate && data.semesterEndDate
      ? calculateWorkingDays(data.semesterStartDate, data.semesterEndDate)
      : 0;

  let courseDetails;
  if (data.courseType === "lab") {
    courseDetails = calculateLabDetails(workingDays, data.unattended);
  } else {
    courseDetails = calculateTheoryDetails(
      workingDays,
      data.creditHours,
      data.unattended
    );
  }

  const requirements = calculateAttendanceRequirements(
    courseDetails.totalClassesWithMakeup,
    data.studentAbsences
  );

  const getStatusColor = (percentage) => {
    if (percentage >= 85) return "text-green-500";
    if (percentage >= 75) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="flex flex-col gap-5 md:w-1/2 items-center md:items-start md:text-left text-gray-100 rounded-xl border px-6 py-6 bg-gray-900">
      <h1 className="font-extrabold text-3xl text-white">
        Attendance Calculator
      </h1>

      {Object.keys(data).length > 0 && (
        <div className="flex flex-col gap-6 w-full h-full">
          <div className="flex flex-col md:flex-col gap-4 w-full text-gray-200">
            <div className="font-extrabold w-full">
              <span className="font-semibold">
                {data.courseName} at {data.universityName}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full text-xs text-gray-400">
              <div>
                <span className="font-semibold">From:</span>{" "}
                <span>{data.semesterStartDate}</span>
              </div>
              <div>
                <span className="font-semibold">End:</span>{" "}
                <span>{data.semesterEndDate}</span>
              </div>
              <div>
                <span className="font-semibold">Make-up Classes:</span>{" "}
                <span>{data.unattended || 0}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full h-[60%] items-center justify-center flex-col gap-4">
            <div className="text-white font-extrabold flex flex-col items-center gap-2">
              <div className="text-8xl">{requirements.remainingAbsences}</div>
              <div className="text-xs">Remaining Absences</div>
            </div>
            <div
              className={`text-2xl font-bold ${getStatusColor(
                requirements.currentAttendancePercentage
              )}`}
            >
              Current Attendance: {requirements.currentAttendancePercentage}%
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-sm text-gray-200 font-semibold tracking-wider">
              Course Details
            </h1>
            <div className="text-xs space-y-4">
              <div>
                <p className="mb-2">
                  <span className="font-extrabold">
                    {data.courseName} {data.courseType}
                  </span>{" "}
                  course{" "}
                  <span className="font-semibold">
                    ({data.creditHours}{" "}
                    {data.creditHours > 1 ? "credits" : "credit"})
                  </span>
                </p>
                <ul className="space-y-1">
                  <li>
                    • Classes per week:{" "}
                    <span className="font-bold">
                      {courseDetails.classesPerWeek}
                    </span>
                  </li>
                  <li>
                    • Regular classes:{" "}
                    <span className="font-bold">
                      {courseDetails.regularClasses}
                    </span>
                  </li>
                  <li>
                    • Make-up classes to be added:{" "}
                    <span className="font-bold">{data.unattended || 0}</span>
                  </li>
                  <li>
                    • Total classes (including make-up):{" "}
                    <span className="font-bold text-yellow-500">
                      {courseDetails.totalClassesWithMakeup}
                    </span>
                  </li>
                  <li>
                    • Hours per session:{" "}
                    <span className="font-bold">
                      {courseDetails.hoursPerSession}
                    </span>
                  </li>
                  <li>
                    • Total hours:{" "}
                    <span className="font-bold">
                      {courseDetails.totalHours}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Attendance Status</p>
                <ul className="space-y-1">
                  <li>
                    • Your absences:{" "}
                    <span className="font-bold">
                      {data.studentAbsences || 0}
                    </span>
                  </li>
                  <li>
                    • Required classes (75%):{" "}
                    <span className="font-bold">
                      {requirements.requiredAttendance}
                    </span>
                  </li>
                  <li>
                    • Maximum absences allowed:{" "}
                    <span className="font-bold">
                      {requirements.maxMissableClasses}
                    </span>
                  </li>
                  <li>
                    • Remaining absences:{" "}
                    <span className="font-bold">
                      {requirements.remainingAbsences}
                    </span>
                  </li>
                  <li>
                    • Current attendance:{" "}
                    <span
                      className={`font-bold ${getStatusColor(
                        requirements.currentAttendancePercentage
                      )}`}
                    >
                      {requirements.currentAttendancePercentage}%
                    </span>
                  </li>
                  <li>
                    • Working days in semester:{" "}
                    <span className="font-bold">{workingDays}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceResults;
