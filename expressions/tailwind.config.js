/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        custom:
          "3px 3px 5px rgba(255, 255, 255, 0.7), -3px -3px 5px rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        lightBlack: "rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        "200": '300px',
        "100": "200px"
      }
    },
  },
  plugins: [],
};
