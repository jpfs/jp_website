import React from "react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-[#132a13] via-[#31572c] to-[#4f772d] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#90a955]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#ecf39e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#ecf39e] to-[#90a955] bg-clip-text text-transparent">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          {t("hero.subtitle")}
        </p>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
            {t("hero.heading")}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
        </div>

        <button className="bg-gradient-to-r from-[#4f772d] to-[#90a955] hover:from-[#31572c] hover:to-[#4f772d] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
