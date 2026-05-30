/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#1A2E1A',
        'warm-espresso': '#2C1810',
        'golden-amber': '#C8841A',
        'cream-white': '#FDF8F0',
        'soft-ivory': '#FAF4E8',
        'halal-green': '#2D6A2D',
        'warm-brown': '#5C3317',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}