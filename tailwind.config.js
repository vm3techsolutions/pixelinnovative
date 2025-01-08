/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24678B', 
        secondary: '#B2D190', 
        background: '#F5F5F5', 
        text: '#333333', 
      },
    },
  },
  plugins: [],
};
