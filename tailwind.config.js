/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'la-belle-aurore': ['La Belle Aurore','sans-serif'],
      },
      colors: {
        'greyish-blue': '#232a34',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            padding: '20px 0',
          },
          '100%': {
            opacity: '1',
            padding: '10px 0',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            padding: '10px 0',
          },
          '100%': {
            opacity: '1',
            padding: '20px 0',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-in',
        'fade-in-down': 'fade-in-down 0.8s ease-in'
      },
    },
  },
  plugins: [],
}