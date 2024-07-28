import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageIcon } from "@heroicons/react/16/solid";

const ChangeLng = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "zh-TW", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "en", name: "English" },
  ];
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChangeLanguage = (lng) => {
    changeLanguage(lng);
    setIsOpen(false);
  };

  // 點擊外部關閉下拉菜單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getCurrentLanguageName = () => {
    return (
      languages.find((lang) => lang.code === currentLanguage)?.name || "中文"
    );
  };

  return (
    <div className="relative max-w-fit mx-1" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center hover:text-[#3c9daeff] justify-center space-x-1 focus:outline-none h-9 px-2 py-1"
      >
        <LanguageIcon className="w-5 h-5" />
        <span className="ml-1">{getCurrentLanguageName()}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className="block hover:text-[#3c9daeff] hover:dark:bg-white hover:bg-gray-800 px-4 py-2 text-sm w-full text-left"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLng;
