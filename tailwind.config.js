/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "": "",
      },
      colors: {
        "t-black": "#090F2B",
        "t-blue": "#0466EB",
        "t-gray": "#4B5630",
        "bg-blues": "#F4F9FF",
        "bg-white": "#FFFFFF",
        "bg-footer": "#012C7B",
        "btn": "#0566EB",
        "bg-icon": "#D1E5FE",
      },
    },
  },
  plugins: [],
};
