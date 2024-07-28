import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../common/NavBar";
import ChangeLng from "../common/ChangeLng";
import DarkModeSwitch from "../common/DarkModeSwitch";
import UserIcon from "../common/UserIcon";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header className="sticky top-0 text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-md z-50">
        <div className="container mx-auto flex p-5 flex-col md:flex-row items-center ">
          <NavBar />
          <div className="flex md:w-1/3 title-font font-medium items-center justify-center md:self-center my-4	md:my-0">
            <Link to="/" className="w-full flex items-center justify-center justify-items-end	hover:no-underline">
              <img
                className="size-9"
                src="/images/logos/logo.png"
                alt="logo"
              ></img>
              <span className="ml-3 text-3xl	 text-[#3c9daeff]">
                {t("nav.app")}
              </span>
            </Link>
          </div>
          <div className="md:w-1/3 inline-flex md:justify-end ml-5 md:ml-0">
            <UserIcon />
            <ChangeLng />
            <DarkModeSwitch />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
