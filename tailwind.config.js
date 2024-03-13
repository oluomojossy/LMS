/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      prefix: "PlaiFntiffaid",
      // addCommonColors: true,
      themes: {
        light: {
          layout: {},
          colors: {
            success: {
              100: "#003382",
              800: "#003382",
              900: "#003382",
              DEFAULT: "#003382",
              foreground: "#d3fff5",
            },
          },
        },
        dark: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
};
