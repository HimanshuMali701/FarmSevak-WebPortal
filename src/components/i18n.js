import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my website",
      features: "Core Platform Features",
      // add all texts you want to translate
    },
  },
  hi: {
    translation: {
      welcome: "मेरी वेबसाइट पर स्वागत है",
      features: "मुख्य प्लेटफ़ॉर्म सुविधाएँ",
    },
  },
  or: {
    translation: {
      welcome: "ମୋ ୱେବସାଇଟକୁ ସ୍ୱାଗତ",
      features: "ମୁଖ୍ୟ ପ୍ଲାଟଫର୍ମ ବୈଶିଷ୍ଟ୍ୟ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
