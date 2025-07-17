import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#132a13] via-[#31572c] to-[#4f772d] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t("contact.success.title")}
          </h2>
          <p className="text-gray-600 mb-6">{t("contact.success.message")}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-[#4f772d] to-[#90a955] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#31572c] hover:to-[#4f772d] transition-all"
          >
            {t("contact.success.backButton")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#132a13] via-[#31572c] to-[#4f772d] pt-20">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#90a955]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#ecf39e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center text-white py-20 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ecf39e] to-[#90a955] bg-clip-text text-transparent">
            {t("contact.page.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
            {t("contact.page.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                {t("contact.info.title")}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {t("contact.info.description")}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.info.email.title")}
                  </h3>
                  <a
                    href="mailto:geral@jpfs.pt"
                    className="text-[#90a955] hover:text-[#ecf39e] transition-colors"
                  >
                    geral@jpfs.pt
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    {t("contact.info.email.description")}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.info.phone.title")}
                  </h3>
                  <a
                    href="tel:+351914125400"
                    className="text-[#90a955] hover:text-[#ecf39e] transition-colors"
                  >
                    (+351) 914 125 400
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    {t("contact.info.phone.description")}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.info.location.title")}
                  </h3>
                  <p className="text-[#90a955]">
                    {t("contact.info.location.address")}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {t("contact.info.location.description")}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.info.hours.title")}
                  </h3>
                  <p className="text-[#90a955]">
                    {t("contact.info.hours.weekdays")}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {t("contact.info.hours.note")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t("contact.form.title")}
            </h2>
            <p className="text-gray-300 mb-8">
              {t("contact.form.description")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#90a955] focus:border-transparent"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#90a955] focus:border-transparent"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#90a955] focus:border-transparent"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#90a955] focus:border-transparent"
                    placeholder={t("contact.form.companyPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.form.subject")} *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#90a955] focus:border-transparent"
                  placeholder={t("contact.form.subjectPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.form.message")} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#90a955] focus:border-transparent resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#4f772d] to-[#90a955] hover:from-[#31572c] hover:to-[#4f772d] text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:shadow-lg transform hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t("contact.form.sending")}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t("contact.form.send")}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white/5 backdrop-blur-md py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("contact.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("contact.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:geral@jpfs.pt"
              className="bg-gradient-to-r from-[#4f772d] to-[#90a955] hover:from-[#31572c] hover:to-[#4f772d] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              {t("contact.cta.emailButton")}
            </a>
            <a
              href="tel:+351914125400"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              {t("contact.cta.phoneButton")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
