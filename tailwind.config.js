/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      mob: { max: "479px" },
    },
    extend: {
      colors: {
        red: "#e50914",
      },
    },
  },
  plugins: [],
};
