import React from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const Navigation = ({ currentPage = "home", onNavigate }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { key: "home", label: t("nav.home"), href: "#inicio" },
    { key: "projects", label: t("nav.projects"), href: "#projetos" },
    { key: "process", label: t("nav.process"), href: "#processo" },
    { key: "contact", label: t("nav.contact"), href: "#contacto" },
  ];

  const handleNavigation = (key, href) => {
    setIsMenuOpen(false);

    if (key === "contact") {
      // Navegar para a página de contactos
      if (onNavigate) {
        onNavigate("contact");
      }
    } else if (currentPage === "contact") {
      // Se estiver na página de contactos e clicar em outro item, voltar para home
      if (onNavigate) {
        onNavigate("home");
      }
      // Dar tempo para a página carregar antes de fazer scroll
      setTimeout(() => {
        if (href && href !== "#inicio") {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    } else {
      // Navegação normal dentro da página inicial
      if (href === "#inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("home", "#inicio")}
            className="text-2xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent hover:from-[#31572c] hover:to-[#4f772d] transition-all duration-300"
          >
            JPfs
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key, item.href)}
                  className={`text-gray-700 hover:text-[#4f772d] transition-colors font-medium ${
                    currentPage === item.key ? "text-[#4f772d]" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4f772d] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key, item.href)}
                  className={`text-left text-gray-700 hover:text-[#4f772d] transition-colors font-medium ${
                    currentPage === item.key ? "text-[#4f772d]" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
