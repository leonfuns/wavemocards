import React from "react";
import { useTranslation } from "react-i18next";
import UserProfile from "../../components/feature/UserProfile";
import { Helmet } from "react-helmet";

function Delete() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("nav.profile")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <UserProfile />
    </>
  );
}

export default Delete;
