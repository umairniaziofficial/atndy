import React from 'react';

const CustomButton = ({ title, borders, extra_style }) => {
  return (
    <button 
      className={`transition-colors duration-300 ease-in-out ${borders ? "px-6 py-2 rounded-3xl border-2 text-rich-black" : ""} ${extra_style} outline-none`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
