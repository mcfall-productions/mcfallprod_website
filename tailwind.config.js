/** @type {import('tailwindcss').Config} */
// Brand colors: see mcfallProdBiz/brand/brand-colors.md
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F3E7D3',
        card: '#FAF4E8',
        navy: '#344B59',
        teal: { DEFAULT: '#1F6867', dark: '#185453' },
        cocoa: '#684A38',
        paprika: '#B85332',
        oatmeal: '#D8C6A7',
        rule: '#dccbb0',
        // Back Catalog Goldmine block only
        coal: '#161e26',
        gold: { DEFAULT: '#c9a13b', light: '#e2bd57' },
      },
      fontFamily: {
        serif: ['Newsreader', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['Libre Franklin', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
