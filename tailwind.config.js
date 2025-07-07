/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // DAVDSM Custom Color Palette
        davdsm: {
          darkest: "#132a13", // Verde muito escuro
          dark: "#31572c", // Verde escuro
          medium: "#4f772d", // Verde médio
          light: "#90a955", // Verde claro
          lightest: "#ecf39e", // Verde muito claro/amarelado
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 40px, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      boxShadow: {
        davdsm:
          "0 20px 25px -5px rgba(79, 119, 45, 0.1), 0 10px 10px -5px rgba(79, 119, 45, 0.04)",
      },
      backgroundImage: {
        "davdsm-gradient":
          "linear-gradient(135deg, #132a13 0%, #31572c 50%, #4f772d 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
