const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary colors
        strongCyan: "#26baa4",
        ligthBlue: "#6173ff",
        shadowCyan: "#209180",
        shadowBlue: "#4956bf",

        // secondary colors
        darkGray: "#4c545d",
        grayBlue: "#9fabb2",
      },
      backgroundImage: {
        header: "url('/public/bg-images/bg-header-mobile.png')",
      },

      fontFamily: {
        bai: ['"Bai Jamjuree"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
