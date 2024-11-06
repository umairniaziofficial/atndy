"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "./shared/CustomButton";
import AttendanceResults from "./AttendanceResults";
import Image from "next/image";
import SearchingImage from "./../assets/gif/Searching.gif";
import { universities } from "@/constants/universities";
import SelectField from "./shared/SelectField";
import InputField from "./shared/InputField";

const AttendanceTracker = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    creditHours: "",
    classTime: "",
    unattended: "",
    semesterStartDate: "",
    semesterEndDate: "",
    universityName: "",
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      ...(name === "courseType" && value === "lab" ? { creditHours: "1" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const form = e.target;
    if (form.checkValidity()) {
      setShow(true);
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className="w-full px-4 overflow-hidden" id="calculate">
      <div className="w-full flex flex-col md:flex-row justify-between max-w-7xl mx-auto py-16 md:py-24 md:gap-14">
        <div className="flex flex-col gap-5 md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1 className="font-extrabold text-3xl text-red-pantone">
            Attendance Calculator
          </h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <SelectField
              label="University"
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              options={universities.map((university) => ({ label: university, value: university }))}
              required={true}
            />

            <InputField
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="Course Name (e.g., Computer Networks)"
              required={true}
            />

            <div className="w-full flex flex-col md:flex-row gap-4">
              <SelectField
                label="Course Type"
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
                options={[
                  { label: "Theory", value: "theory" },
                  { label: "Lab", value: "lab" },
                ]}
                required={true}
              />

              <SelectField
                label="Credit Hours"
                name="creditHours"
                value={formData.creditHours}
                onChange={handleChange}
                options={
                  formData.courseType === "lab"
                    ? [{ label: "1 Credit Hour", value: "1" }]
                    : [
                        { label: "2 Credit Hours", value: "2" },
                        { label: "3 Credit Hours", value: "3" },
                      ]
                }
                required={true}
              />
            </div>

            <div className="flex flex-col md:flex-row w-full gap-4">
              <InputField
                type="date"
                name="semesterStartDate"
                value={formData.semesterStartDate}
                onChange={handleChange}
                label="Semester Start Date"
                required={true}
              />
              <InputField
                type="date"
                name="semesterEndDate"
                value={formData.semesterEndDate}
                onChange={handleChange}
                label="Semester End Date"
                required={true}
              />
            </div>

            <SelectField
              label="Class Duration"
              name="classTime"
              value={formData.classTime}
              onChange={handleChange}
              options={[
                { label: "Less than 1 hour (e.g., 50 mins)", value: "50" },
                { label: "More than 1 hour (e.g., 1 hour 20 min)", value: "80" },
              ]}
              required={true}
            />

            <InputField
              type="number"
              name="unattended"
              value={formData.unattended}
              onChange={handleChange}
              placeholder="Number of classes not taken by the teacher (default: 0)"
            />

            <CustomButton
              title="Calculate"
              borders={true}
              extra_style="border-rich-black w-full hover:text-white hover:bg-rich-black transition-colors duration-300 ease-in-out"
              aria-label="Calculate your absences"
            />
          </form>
        </div>

        {show ? (
            <AttendanceResults data={formData} showResult={show} />
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
    </div>
  );
};

export default AttendanceTracker;
