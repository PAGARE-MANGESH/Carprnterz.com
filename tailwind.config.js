

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// /** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],

  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

