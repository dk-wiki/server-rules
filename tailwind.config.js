/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-blue-300",
    "bg-red-300",
    "bg-green-300",
    "border-blue-300",
    "border-red-300",
    "border-green-300",
    "bg-blue-100",
    "bg-red-100",
    "bg-green-100",
  ],
};

