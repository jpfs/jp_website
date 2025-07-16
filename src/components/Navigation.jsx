import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const Navigation = () => {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent">
            JPfs
          </div>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-[#4f772d] transition-colors"
              >
                {t("nav.home")}
              </a>
              <a
                href="#projetos"
                className="text-gray-700 hover:text-[#4f772d] transition-colors"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#processo"
                className="text-gray-700 hover:text-[#4f772d] transition-colors"
              >
                {t("nav.process")}
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-[#4f772d] transition-colors"
              >
                {t("nav.contact")}
              </a>
            </div>

            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
