import React from "react";

const SelectField = ({ label, name, value, onChange, options, required }) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 rounded-xl w-full border border-rich-black outline-none"
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
