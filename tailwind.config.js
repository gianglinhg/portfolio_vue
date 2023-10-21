/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
      fontFamily: {
          primary: "Playfair Display",
          body: "work sans"
      },
      container:{
          padding: {
              DEFAULT: "1rem",
              lg: "3rem"
          },
      },
      extend: {
          colors: {
              "light-primary": "#FAF1E6",
              "light-secondary": "#FDFAF6",
              "light-tail-500": "#A9DED2",
              "light-tail-100": "#54BAB9",
              "dark-primary": "#252B48",
              "dark-secondary": "#445069",
              "dark-tail-500": "#5B9A8B",
              "dark-tail-100": "#F7E987",
              accent:{
                  DEFAULT: "#AC6B34",
                  hover: "#925a2b",
              },
              paragraph: "#878E99",
              // blue: colors.blue,
              // indigo: colors.indigo,
              // green: colors.green,
              // red: colors.red,
          }
      }
  },

};
