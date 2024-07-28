import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className="text-gray-700 bg-gray-200 dark:bg-gray-800 dark:text-white max-h-fit">
        <div className="container px-5  py-10 mx-auto flex items-center md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex flex-col w-full md:w-1/4 md:mx-0 mx-auto text-center md:text-left ">
            <a href="/" className="flex order-first lg:order-none title-font font-medium  mb-5 md:mb-0 justify-center md:justify-start items-start">
              <img className="h-full" src="/images/logos/logo.png" alt="logo"></img>
              <h1 className="ml-2 text-2xl text-[#3c9daeff]">{t("nav.app")}</h1>
            </a>
            <p className="mt-2 mb-1">{t("footer.subtitle")}</p>
            <a className="hover:text-teal-600" target="_blank" rel="noreferrer"  href={t("footer.email")}>info@wavemocards.com</a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-10 md:text-left text-center w-3/4 justify-evenly">
            <div className="lg:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3">
                {t("footer.contributors.title")}
              </h2>
              <div className="border border-slate-300"></div>
              <nav className="list-none mb-10">
                <ul className="flex flex-col">
                  <li>
                    <a
                      href={t("footer.contributors.url.elma")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.pm")}</div>
                      <div>{t("footer.contributors.name.elma")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.elma")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.pd")}</div>
                      <div>{t("footer.contributors.name.elma")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.elma")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.fd")}</div>
                      <div>{t("footer.contributors.name.elma")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.wei")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.fc")}</div>
                      <div>{t("footer.contributors.name.wei")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.leon")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.db")}</div>
                      <div>{t("footer.contributors.name.leon")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.leon")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.bd")}</div>
                      <div>{t("footer.contributors.name.leon")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.leon")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.sd")}</div>
                      <div>{t("footer.contributors.name.leon")}</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={t("footer.contributors.url.yi")}
                      className="flex justify-between mb-1 hover:text-teal-600"
                      target="_blank" rel="noreferrer" 
                    >
                      <div>{t("footer.contributors.position.gd")}</div>
                      <div>{t("footer.contributors.name.yi")}</div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3">
                {t('footer.usefulLinks.title')}
              </h2>
              <div className="border border-slate-300"></div>
              <nav className="list-none mb-10">
                <li>
                <a
                      href="/emotions"
                      className="mb-1 hover:text-teal-600"
                    >{t('nav.emotions')}</a>
                </li>
                <li>
                <a
                      href="/report-issues"
                      className="mb-1 hover:text-teal-600"
                    >{t('footer.usefulLinks.list.report')}</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 dark: text-gray-700 dark:bg-gray-900 dark:text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
            <p className="text-center">
            © 2023 - {getCurrentYear()} {t("footer.copyright")}
            </p>
            {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
