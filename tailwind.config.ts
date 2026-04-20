import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial do Taipei Coffee House
        taipei: {
          red: "#A84544", // PANTONE 4062 C - Cor principal
          cream: "#F8F1EB", // PANTONE - Cor de fundo suave
          sage: "#9AAB9E", // PANTONE 4184 C - Verde sálvia
          brown: "#8F7368", // PANTONE 4090 C - Marrom
          beige: "#CDB5A7", // PANTONE 4745 C - Bege
        },
        primary: {
          DEFAULT: "#A84544",
          light: "#CDB5A7",
          dark: "#8F7368",
        },
        secondary: {
          DEFAULT: "#F8F1EB",
          sage: "#9AAB9E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
