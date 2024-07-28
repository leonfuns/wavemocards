import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

function DarkModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="flex items-center rounded-full hover:text-[#3c9daeff] hover:dark:bg-amber-100 hover:bg-gray-900 size-9 justify-center p-1"
      >
        {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
      </button>
    </>
  );
}

export default DarkModeSwitch;
