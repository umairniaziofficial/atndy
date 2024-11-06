import React from "react";

const InputField = ({ type, name, value, onChange, placeholder, label, required }) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
        required={required}
      />
    </div>
  );
};

export default InputField;
