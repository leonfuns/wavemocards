import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function Emotions() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("pages.emotions.title.h1")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <section className="flex flex-col w-9/12 mx-auto">
        <h1 className="mb-4 mt-12">{t("pages.emotions.title.h1")}</h1>
        <div className="border border-slate-300"></div>
        <article className="my-5">
          <h2 className="mt-4">{t("pages.emotions.title.aboutEmotions")}</h2>
          <p>{t("pages.emotions.content.aboutEmotions")}</p>
          <h2 className="mt-4">{t("pages.emotions.title.6emotions")}</h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center m-5">
              <img src="/images/emotions/happy.svg" alt="happy"></img>
              <p>{t("pages.emotions.content.6emotions.happy")}</p>
            </div>
            <div className="flex flex-col justify-center items-center m-5">
              <img src="/images/emotions/sadness.svg" alt="sadness"></img>
              <p>{t("pages.emotions.content.6emotions.sadness")}</p>
            </div>
            <div className="flex flex-col justify-center items-center m-5">
              <img src="/images/emotions/fear.svg" alt="fear"></img>
              <p>{t("pages.emotions.content.6emotions.fear")}</p>
            </div>
            <div className="flex flex-col justify-center items-center m-5">
              <img src="/images/emotions/disgust.svg" alt="disgust"></img>
              <p>{t("pages.emotions.content.6emotions.disgust")}</p>
            </div>
            <div className="flex flex-col justify-center items-center m-5">
              <img src="/images/emotions/anger.svg" alt="anger"></img>
              <p>{t("pages.emotions.content.6emotions.anger")}</p>
            </div>
            <div className="flex flex-col justify-center items-center m-5">
              <img src="/images/emotions/surprise.svg" alt="surprise"></img>
              <p>{t("pages.emotions.content.6emotions.surprise")}</p>
            </div>
          </div>
          <p>{t("pages.emotions.content.6emotions.context")}</p>
          <h2 className="mt-4">{t("pages.emotions.title.emotionRange")}</h2>
          <p>{t("pages.emotions.content.emotionRange")}</p>
          <h2 className="mt-4">{t("pages.emotions.title.emotionsHealth")}</h2>
          <p>{t("pages.emotions.content.emotionsHealth")}</p>
          <div className="flex justify-end py-6">
            <a href={t("pages.emotions.refurl")} className="text-sm">
              {t("pages.emotions.reference")}
            </a>
          </div>
        </article>
      </section>
    </>
  );
}

export default Emotions;
