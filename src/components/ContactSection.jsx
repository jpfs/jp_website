import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Vamos falar de resultados?
        </h2>
        <p className="text-xl mb-12 opacity-90">
          A nossa equipa está sempre pronta para responder a todas as tuas
          dúvidas. Contacta-nos!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center">
            <Mail className="w-6 h-6 mr-3" />
            <div>
              <p className="text-sm opacity-75">Email</p>
              <p className="font-semibold">geral@jpfs.pt</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Phone className="w-6 h-6 mr-3" />
            <div>
              <p className="text-sm opacity-75">Telefone</p>
              <p className="font-semibold">(+351) 914 125 400</p>
            </div>
          </div>
        </div>

        <button className="mt-8 bg-green-200 text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-green-300 transition-colors">
          Contactar Agora
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
