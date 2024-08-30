/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.js', './App.js'],
  theme: {
    extend: {
      colors: {
        flavrite: { 
          'orange':'#E76E50',
          'dark-gray': '#36454F',
          'vote-gray': '#585858',
          'light-gray': '#AEB4B8',
          'white': '#FFFFFF',
          "beige": "#F3EEEA",
          "toggle": "#7e7e7e",
          "heading-green": "#2e4552",
          "button-orange": "#f1a263",
          "sale-blue": "#299d90",
          "sale-light-blue": "#badad5",
          "sale-green": "#4b9288",
          "sale-orange": "#f1a263",
        }
    }},
  },
  plugins: [],
  displayName: 'flavrite',
}

