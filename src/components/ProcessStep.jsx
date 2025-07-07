import React from "react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const ProcessStep = ({ step, index }) => {
  const { t } = useLanguage();

  const colors = [
    "from-[#31572c] to-[#4f772d]",
    "from-[#4f772d] to-[#90a955]",
    "from-[#90a955] to-[#31572c]",
    "from-[#132a13] to-[#31572c]",
  ];

  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors[index]} flex items-center justify-center text-white font-bold text-lg mr-4`}
        >
          {index + 1}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
      </div>
      <p className="text-gray-600 pl-16">{step.description}</p>

      {index < 3 && (
        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-[#90a955] to-transparent"></div>
      )}
    </div>
  );
};

export default ProcessStep;
