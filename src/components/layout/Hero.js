import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";

export default function Hero() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  const backgroundImage = isDarkMode
    ? "url('/images/bg/bg-dark.svg')"
    : "url('/images/bg/bg-light.svg')";

  return (
    <>
      <section
        className="flex flex-col items-center justify-center bg-local bg-cover bg-center min-h-screen -mt-[76px]"
        style={{ backgroundImage }}
      >
        <div className="flex flex-col justify-center items-center">
          {/* <div className=""> */}
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 lg:pr-[300px]">
              {t("pages.home.title")}
            </h1>{" "}
          {/* </div> */}
          {/* <div className=" text-right"> */}
            <h1 className="text-7xl md:text-8xl font-bold text-white mt-4 lg:pl-[300px]">
              {t("pages.home.subtitle")}
            </h1>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
