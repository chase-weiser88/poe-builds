/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poe: {
          primary: '#af6025',
          secondary: '#1e1e1e',
          accent: '#c59a6d',
          dark: '#0a0a0a',
          light: '#f5f5f5',
        }
      }
    },
  },
  plugins: [],
}
