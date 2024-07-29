import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/common/Button";

function Login() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/user/profile");
    } catch (e) {
      setError(e.message);
    }
  };

  const backgroundImage = isDarkMode
    ? "url('/images/bg/bg-login-dark.svg')"
    : "url('/images/bg/bg-login-light.svg')";

  return (
    <>
      <Helmet>
        <title>
          {t("nav.login")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <div className="min-h-screen -mt-[150px] md:-mt-[76px] flex items-center justify-center">
        <div
          className="invisible md:visible md:w-1/2 h-screen bg-local bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage }}
        ></div>
        <div className="relative md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-gray-100 md:text-[#3c9dae] mb-4">
            {t("pages.login.title")}
          </h1>
          <h2 className="mb-8 text-gray-100 md:text-[#3c9daeff]">
            {t("pages.login.subtitle")}
          </h2>
          {error && <p className="error w-72">{error}</p>}
          <form onSubmit={handleLogin} className="mt-8 space-y-6 w-full md:max-w-72">
            <div className="w-500">
              <label htmlFor="email" className="sr-only">{t("pages.login.email")}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-xl focus:outline-none focus:ring-teal-700 focus:border-teal-700 focus:z-10 sm:text-sm dark:focus:border-teal-200 dark:focus:ring-teal-200"
                placeholder={t("pages.login.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">{t("pages.login.password")}</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-xl focus:outline-none focus:ring-teal-700 focus:border-teal-700 focus:z-10 sm:text-sm dark:focus:border-teal-200 dark:focus:ring-teal-200"
                placeholder={t("pages.login.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button
                text={t("pages.login.login")}
                type="submit"
                variant="login"
              />
            </div>
          </form>
          <div >
            <Link to="/forgot-password" className=" hover:text-red-500">
              {t("pages.login.forget")}
            </Link>
          </div>
          <div className="text-center">
            <Link to="/user/register" className="flex my-8 hover:text-blue-600">
              {t("pages.login.register")}
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Login;
