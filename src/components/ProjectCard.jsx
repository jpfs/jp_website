import React from "react";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const ProjectCard = ({ project, index }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-48 bg-gradient-to-br from-[#ecf39e] to-[#90a955] flex items-center justify-center">
        <div className="text-6xl font-bold text-[#31572c]">
          {project.name.charAt(0)}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
          <span className="px-3 py-1 bg-[#ecf39e] text-[#31572c] rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.date}</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#4f772d] to-[#90a955] hover:from-[#31572c] hover:to-[#4f772d] text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
          {t("projects.openProject")}
          <ExternalLink className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
