import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: "pt", name: "PT", flag: "🇵🇹" },
    { code: "en", name: "EN", flag: "🇬🇧" },
  ];

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2">
        <Globe className="w-4 h-4 text-gray-600" />

        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              px-3 py-1 rounded-md text-sm font-medium transition-all duration-200
              ${
                currentLanguage === lang.code
                  ? "bg-[#4f772d] text-white shadow-md"
                  : "text-gray-600 hover:text-[#4f772d] hover:bg-gray-100"
              }
            `}
            aria-label={`Switch to ${lang.name}`}
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
