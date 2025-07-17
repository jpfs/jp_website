import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const ContactSection = ({ onNavigateToContact }) => {
  const { t } = useLanguage();

  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#132a13] via-[#31572c] to-[#4f772d] text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#90a955]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#ecf39e]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ecf39e] to-[#90a955] bg-clip-text text-transparent">
          {t("contact.title")}
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
          {t("contact.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm opacity-75 mb-1">{t("contact.email")}</p>
              <a
                href="mailto:geral@jpfs.pt"
                className="font-semibold text-[#ecf39e] hover:text-white transition-colors"
              >
                geral@jpfs.pt
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm opacity-75 mb-1">{t("contact.phone")}</p>
              <a
                href="tel:+351914125400"
                className="font-semibold text-[#ecf39e] hover:text-white transition-colors"
              >
                (+351) 914 125 400
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={handleContactClick}
          className="group bg-gradient-to-r from-[#ecf39e] to-[#90a955] text-[#31572c] px-8 py-4 rounded-full font-bold text-lg hover:from-white hover:to-[#ecf39e] transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
        >
          <span>{t("contact.cta")}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
