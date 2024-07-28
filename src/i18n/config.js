import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './en.json';
import zhTWTranslations from './zh-TW.json';
import jaTranslations from './ja.json';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      'zh-TW': { translation: zhTWTranslations },
      ja: { translation: jaTranslations },
    },
    lng: 'zh-TW', // 默認語言
    fallbackLng: 'en', // 備用語言
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;