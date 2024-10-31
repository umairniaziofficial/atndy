"use client";
import React, { useState } from "react";
import CustomButton from "./shared/CustomButton";
import AttendanceResults from "./AttendanceResults";

const AttendanceTracker = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    creditHours: "",
    classTime: "",
    unattended: "",
    semesterStartDate: "",
    semesterEndDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "courseType" && value === "lab") {
      setFormData({ ...formData, courseType: value, creditHours: "1" });
    }
  };

  return (
    <div className="w-full px-4 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 md:py-24">
        <div className="flex flex-col gap-5 md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1 className="font-extrabold text-3xl text-red-pantone">
            Attendance Calculator
          </h1>

          <input
            type="text"
            name="courseName"
            placeholder="Course Name (e.g., Computer Networks)"
            className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
            value={formData.courseName}
            onChange={handleChange}
          />

          <div className="w-full flex flex-col md:flex-row gap-4">
            <select
              name="courseType"
              value={formData.courseType}
              onChange={handleChange}
              className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
            >
              <option value="">Select Course Type</option>
              <option value="theory">Theory</option>
              <option value="lab">Lab</option>
            </select>

            <select
              name="creditHours"
              value={formData.creditHours}
              onChange={handleChange}
              className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
            >
              <option value="">Select Credit Hours</option>
              {formData.courseType === "lab" ? (
                <option value="1">1 Credit Hour</option>
              ) : (
                <>
                  <option value="2">2 Credit Hours</option>
                  <option value="3">3 Credit Hours</option>
                </>
              )}
            </select>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="w-full">
              <label
                htmlFor="semesterStartDate"
                className="block text-sm font-medium text-gray-700"
              >
                Semester Start Date
              </label>
              <input
                type="date"
                id="semesterStartDate"
                name="semesterStartDate"
                className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
                value={formData.semesterStartDate}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="semesterEndDate"
                className="block text-sm font-medium text-gray-700"
              >
                Semester End Date
              </label>
              <input
                type="date"
                id="semesterEndDate"
                name="semesterEndDate"
                className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
                value={formData.semesterEndDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <select
            name="classTime"
            value={formData.classTime}
            onChange={handleChange}
            className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
          >
            <option value="">Select Class Duration</option>
            <option value="50">Less than 1 hour (e.g., 50 mins)</option>
            <option value="120">More than 1 hour (e.g., 2 hours)</option>
          </select>

          <input
            type="number"
            name="unattended"
            value={formData.unattended}
            onChange={handleChange}
            placeholder="Number of classes not taken by the teacher"
            className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
          />

          <CustomButton
            title="Calculate"
            borders={true}
            extra_style="border-rich-black w-full hover:text-white hover:bg-rich-black transition-colors duration-300 ease-in-out"
            aria-label="Calculate your absences"
          />
        </div>

        <div className="md:w-1/2 mt-10 md:pl-20 md:mt-0 flex justify-center">
          <AttendanceResults data={formData} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;
