import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/layout/Hero";
import { Helmet } from 'react-helmet';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("footer.copyright")}
        </title>
      </Helmet>
      <Hero />
    </>
  );
}

export default Home;
