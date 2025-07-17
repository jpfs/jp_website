import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext.jsx";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import ProcessStep from "./components/ProcessStep";
import ContactSection from "./components/ContactSection";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

const AppContent = () => {
  const { getTranslations, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState("home");

  const translations = getTranslations();
  const projects = translations.projectsData;
  const processSteps = [
    translations.process.steps.analysis,
    translations.process.steps.prototype,
    translations.process.steps.testing,
    translations.process.steps.implementation,
  ];

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Scroll para o topo quando mudar de página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Se estiver na página de contactos, renderizar apenas a ContactPage
  if (currentPage === "contact") {
    return (
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
        <ContactPage />
        <Footer />
      </div>
    );
  }

  // Página inicial
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />

      {/* Hero Section */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("projects.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("process.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto">
        <ContactSection
          onNavigateToContact={() => handleNavigation("contact")}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
