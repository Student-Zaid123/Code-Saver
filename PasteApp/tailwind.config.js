/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Fixed path, included 'ts' for completeness
  ],
  theme: {
    extend: {}, // Removed the nested 'extend' object
  },
  plugins: [],
};