import React from "react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-[#90a955] to-[#ecf39e] bg-clip-text text-transparent mb-4">
          DAVDSM
        </div>
        <p className="text-gray-400 mb-6">{t("footer.tagline")}</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>{t("footer.copyright")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
