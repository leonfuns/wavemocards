import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <>
      <nav className="flex flex-wrap items-center md:w-1/3 space-x-2 lg:space-x-5">
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/emotions">{t("nav.emotions")}</Link>
        <Link to="/emotioncards">{t("nav.emotioncards")}</Link>
      </nav>
    </>
  );
}

export default NavBar;
