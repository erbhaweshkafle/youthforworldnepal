import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// We import the JSON files you created earlier
import enTranslations from './locales/en.json';
import neTranslations from './locales/ne.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ne: { translation: neTranslations }
    },
    lng: "en", // Default language when the site loads
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;