/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      fontFamily: {
        'lato': 'Lato, sans-serif',
        'poppins': 'Poppins, sans-serif',
      },

      colors: {
        'button': '#187FF6',
        'hover': '#151515',
        'hire': '#3291FF',
      },
    },
  },
  plugins: [],
}

