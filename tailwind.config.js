/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#011627",
        "baby-powder": "#fdfffc",
        "light-sea-green": "#2ec4b6",
        "red-pantone": "#e71d36",
        "orange-peel": "#ff9f1c",
      },
    },
  },
  plugins: [],
};
