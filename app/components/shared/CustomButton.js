import React from 'react';

const CustomButton = ({ title, borders, extra_style, ButtonAction }) => {
  return (
    <button 
      onClick={ButtonAction}
      className={` custom-button text-white! ${extra_style}`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
