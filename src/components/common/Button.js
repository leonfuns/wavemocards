import React from "react";

export default function Button({ text, onClick, type = "button", disabled = false, variant = "default" }) {
  const baseClasses = "flex items-center rounded-full justify-center p-1";
  const variantClasses = {
    default: "bg-gray-800 text-gray-100 hover:bg-[#3c9daeff] w-full my-2",
    login: "bg-gray-800 md:dark:bg-[#3c9daeff] text-gray-100 hover:bg-[#3c9daeff] md:dark:hover:bg-[#307f8d] w-full my-2",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-green-500 text-white hover:bg-green-600 w-40 h-14",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {text}
    </button>
  );
}