import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Correct path for components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Ensure app directory is included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
      },
    },
  },
  plugins: [],
};

export default config;
