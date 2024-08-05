import React, { useState, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function UserIcon({ isMobile }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

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

  return (
    <>
      <div
        className={`relative ${isMobile ? "w-full" : "max-w-fit"}`}
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          className="flex items-center hover:text-[#3c9daeff] justify-end space-x-1 focus:outline-none h-9 px-2 py-1 w-32 -ml-20"
        >
          <UserCircleIcon className="w-8 h-8" />
        </button>
        {isOpen && (
          <div
            className={`${
              isMobile ? "relative -ml-20" : "absolute"
            }  mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50`}
          >
            <Link
              to="/user/profile"
              className="block hover:text-[#3c9daeff] hover:dark:bg-white hover:bg-gray-800 py-2 px-4 text-sm w-full text-left"
            >
              {t("nav.profile")}
            </Link>
            <Link
              to="/user/myrecord"
              className="block hover:text-[#3c9daeff] hover:dark:bg-white hover:bg-gray-800 py-2 px-4 text-sm w-full text-left"
            >
              {t("nav.myrecord")}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default UserIcon;
