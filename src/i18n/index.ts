import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./english";
import translationsFr from "./french";
import store from "store";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    fr: { translation: translationsFr },
  },
  lng: store.get("language") ?? "fr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
