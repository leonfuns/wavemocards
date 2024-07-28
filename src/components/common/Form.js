import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const Form = ({ fields, formData, errors, touched, showPassword, handleInputChange, handleBlur, togglePasswordVisibility, t }) => {
  const renderInput = (name, type, placeholder) => (
    <div key={name} className="relative">
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      <input
        id={name}
        name={name}
        type={showPassword[name] ? "text" : type}
        required
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
          errors[name] && touched[name] ? "border-red-300" : "border-gray-300"
        } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {(name === "password" || name === "confirmPassword") && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800"
          onClick={() => togglePasswordVisibility(name)}
        >
          {showPassword[name] ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
      {errors[name] && touched[name] && (
        <p className="text-red-500 text-xs mt-1 whitespace-pre-line">{errors[name]}</p>
      )}
    </div>
  );

  const renderDatePicker = (name, placeholder) => (
    <div key={name} className="relative w-full">
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      <DatePicker
        id={name}
        name={name}
        selected={formData[name]}
        onChange={(date) => handleInputChange({ target: { name, value: date } })}
        dateFormat="dd / MM / yyyy"
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholderText={placeholder}
      />
      <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );

  const renderSelect = (name, options, placeholder) => (
    <div key={name}>
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      <select
        id={name}
        name={name}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
          formData[name] ? 'text-gray-900' : 'text-gray-500'
        }`}
        value={formData[name]}
        onChange={handleInputChange}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const renderField = (field) => {
    switch (field.type) {
      case 'email':
      case 'text':
      case 'password':
        return renderInput(field.name, field.type, t(field.placeholder));
      case 'date':
        return renderDatePicker(field.name, t(field.placeholder));
      case 'select':
        return renderSelect(field.name, field.options, t(field.placeholder));
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-5">
      {fields.map(renderField)}
    </div>
  );
};

export default Form;