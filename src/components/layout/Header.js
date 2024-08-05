import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../common/NavBar";
import ChangeLng from "../common/ChangeLng";
import DarkModeSwitch from "../common/DarkModeSwitch";
import UserIcon from "../common/UserIcon";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 點擊外部關閉下拉菜單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-md z-50" ref={dropdownRef}>
      <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
        {/* 漢堡按鈕 - 僅在小螢幕顯示 */}
        <div className="md:hidden w-full flex justify-between items-center">
          <Link to="/" className="flex items-center hover:no-underline">
            <img className="size-9" src="/images/logos/logo.png" alt="logo" />
            <span className="ml-3 text-3xl text-[#3c9daeff]">
              {t("nav.app")}
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-500 w-10 h-10 relative focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen && "opacity-0"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* 大螢幕導航 */}
        <div className="hidden md:flex md:w-1/3 w-full items-center">
          <NavBar />
        </div>

        {/* Logo - 在大螢幕置中 */}
        <div className="hidden md:flex md:w-1/3 title-font font-medium items-center justify-center">
          <Link to="/" className="flex items-center hover:no-underline">
            <img className="size-9" src="/images/logos/logo.png" alt="logo" />
            <span className="ml-3 text-3xl text-[#3c9daeff]">
              {t("nav.app")}
            </span>
          </Link>
        </div>

        {/* 右側按鈕 - 大螢幕 */}
        <div className="hidden md:flex md:w-1/3 justify-end items-center">
          <UserIcon />
          <ChangeLng />
          <DarkModeSwitch />
        </div>

        {/* 小螢幕選單 */}
        <div
          className={`md:hidden flex flex-col w-full items-center justify-between overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? "mt-3 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <NavBar />
          <div className="flex mt-4 relative  justify-center">
            <UserIcon isMobile={true} />
            <ChangeLng isMobile={true} />
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
