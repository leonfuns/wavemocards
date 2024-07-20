import React from "react";
import { useTranslation } from "react-i18next";
import UserProfile from "../../components/feature/UserProfile";
import { Helmet } from "react-helmet";

function Profile() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("nav.profile")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <div className="flex flex-col">
        <UserProfile />
      </div>
    </>
  );
}

export default Profile;
