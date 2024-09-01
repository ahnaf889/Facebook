/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        auth_font_color: "#11175D",
        auth_bg_color: "#5F35F5",
        auth_orenge_color: "#EA6C00",
        auth_opasiti_color: "#4D4D4DBF",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
