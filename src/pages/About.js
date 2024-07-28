import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("nav.about")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          {t("pages.about.title")}
        </h1>
        <p className="text-gray-800 dark:text-gray-200">
          {t("pages.about.subtitle")}
        </p>
      </div>
    </>
  );
}

export default About;
