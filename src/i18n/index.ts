import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationsRO from './locales/ro.json';
import translationsEN from './locales/en.json';
import translationsTR from './locales/tr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ro: { translation: translationsRO },
      en: { translation: translationsEN },
      tr: { translation: translationsTR }
    },
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;