/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#5349C3",
        backgroundColor: "#F6F8FA",
        primaryGray: "#F9F9F9",
        darkComponent: "#171A3E",
        darkComponentAccent: "#131130",
        darkBackground: "#131130",
      },
    },
  },
  plugins: [],
};
