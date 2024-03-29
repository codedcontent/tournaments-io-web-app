/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: ["Mukta", "system-ui"],
      title: ["Didact Gothic", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#0094FF",
        secondary: "#FFA819",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
