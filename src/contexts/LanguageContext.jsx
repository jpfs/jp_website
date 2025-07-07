import React, { createContext, useContext, useState, useEffect } from "react";
import { pt } from "../translations/pt";
import { en } from "../translations/en";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to Portuguese
  const getInitialLanguage = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("davdsm-language");
      if (saved) return saved;

      // Check browser language
      const browserLang = navigator.language.split("-")[0];
      return browserLang === "en" ? "en" : "pt";
    }
    return "pt";
  };

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

  const translations = {
    pt,
    en,
  };

  const changeLanguage = (lang) => {
    if (lang === "pt" || lang === "en") {
      setCurrentLanguage(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("davdsm-language", lang);
        // Update HTML lang attribute
        document.documentElement.lang = lang;
      }
    }
  };

  // Get translation by key path (e.g., 'nav.home')
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to Portuguese if key not found
        value = translations.pt;
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            console.warn(`Translation key "${key}" not found`);
            return key;
          }
        }
        break;
      }
    }

    return value || key;
  };

  // Get current translations object
  const getTranslations = () => translations[currentLanguage];

  useEffect(() => {
    // Set initial HTML lang attribute
    if (typeof window !== "undefined") {
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getTranslations,
    isPortuguese: currentLanguage === "pt",
    isEnglish: currentLanguage === "en",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
