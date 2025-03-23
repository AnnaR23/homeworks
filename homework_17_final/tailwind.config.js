/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/pages/*.html'],
  theme: {
    extend: {
      colors: {
        main_regular: "#323264",
        main_alt: "#46466E",
        main_soft: "#686887",
        accent: "#F0145A",
        grey: "#B3B3BA",
        active_regular: "#24A3FF",
        hillel: "#1C4280",
        WannaBiz: "#143646",
        tapgerine: "#F48B30",
        orangear: "#FD9339",
        look: "#9E4DC3",
        adtelligent: "#E2E2E4",
        clickKi: "#C71C36",
        ecoLeasing: "#DCF3F9",
        infraTek: "#EAEAEA",
        cityPark: "#282240",
        artPrintStudio: "#1D4568",
        footerColor: "#F5F5FA",
},
      backgroundImage: {
        'gradient_superSoft': "linear-gradient(228.57deg, #323264 11.93%, #323264 57.17%, #643E72 87.46%)",
      },
    },
  },
  plugins: [],
}

