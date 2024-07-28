import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import CategoryList from "../components/common/CategoryList";
import Connect from "../services/connect";

function EmotionsCards() {
  const { t } = useTranslation();
  const API_URL = `${process.env.REACT_APP_GET_EMOTION_CARDS}?lang=zh-TW`;
  return (
    <>
      <Helmet>
        <title>
          {t("pages.emotionCards.title")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <section className="flex flex-col w-10/12 mx-auto mb-10">
        <h1 className="mb-4 mt-12">{t("pages.emotions.title.h1")}</h1>
        <div className="border border-slate-300 mb-4"></div>
        <Connect URL={API_URL}>
          {(data) => <CategoryList cards={data} />}
        </Connect>
      </section>
    </>
  );
}
export default EmotionsCards;
