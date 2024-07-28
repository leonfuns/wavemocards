import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { ThemeContext } from "../../context/ThemeContext";

function UserProfile() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);

  const images = isDarkMode
    ? "/images/illustration/profile-dark.svg"
    : "/images/illustration/profile-light.svg";

  return (
    <div className="flex flex-col w-4/5 mx-auto my-10">
      <h1>{t("pages.userProfile.title")}</h1>
      <div className="border border-slate-300 my-3"></div>
      <div className="flex w-full my-10">
        <div className="w-1/2">
          <img
            src={images}
            alt="profile"
          ></img>
        </div>
        <div className="flex flex-col w-1/2 px-9 text-2xl gap-5">
          <p>
            {t("pages.userProfile.email")} {user.email}
          </p>
          <p>
            {t("pages.userProfile.password")} ***************
          </p>
          <p>
            {t("pages.userProfile.name")} {user.displayName || "Not set"}
          </p>
          <p>
            {t("pages.userProfile.role")} {user.emailVerified || "Not set"}
          </p>
          <p>
            {t("pages.userProfile.photoURL")} {user.photoURL || "Not set"}
          </p>
          <p>
            {t("pages.userProfile.creationTime")} {user.metadata.creationTime || "Not set"}
          </p>
          <p>
            {t("pages.userProfile.lastSignInTime")} {user.metadata.lastSignInTime || "Not set"}
          </p>
        </div>
      </div>
      <p className="text-sm dark:invisible text-gray-400">Illustration by <a href="https://icons8.com/illustrations/author/iAdLsFJOKDrk">Tanya Krasutska</a> from <a href="https://icons8.com/illustrations">Ouch</a>!</p>
    </div>
  );
}

export default UserProfile;
