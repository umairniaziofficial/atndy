import React from "react";
import CustomCard from "./shared/CustomCard";
import { icons } from "@/constants";

const steps = [
  {
    number: 1,
    heading: "Input Your Data",
    text: "Fill in the form with your course details, including class names, credit hours, and any absences.",
    icon: icons.game,
    width: "50",
  },
  {
    number: 2,
    heading: "Track Your Attendance",
    text: "Monitor your attendance by noting any classes missed, and adjust your records as needed.",
    icon: icons.track,
    width: "50",
  },
  {
    number: 3,
    heading: "Calculate Absences",
    text: "Use the tool to see how many absences you can afford while maintaining a satisfactory attendance percentage.",
    icon: icons.calculate,
    width: "30",
  },
  {
    number: 4,
    heading: "View Results",
    text: "Analyze your attendance trends and get insights to improve your class participation.",
    icon: icons.result, 
    width: "40",
  },
];

const InfoSection = () => {
  return (
    <div className="w-full px-4 overflow-hidden py-16 bg-baby-powder">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-center font-extrabold text-3xl text-rich-black tracking-widest mb-16">
          How it Works
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <CustomCard
              key={step.number}
              icon={step.icon}
              number={step.number}
              heading={step.heading}
              text={step.text}
              width={step.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
