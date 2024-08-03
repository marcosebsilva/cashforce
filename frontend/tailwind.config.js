/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // color names based on the figma codes
      colors: {
        'sideslider-grey': "#FBFDFE",
        'n-mid': {
          100:'#DFE2EB',
          200: '#A1A8B8',
        },
        'dark-blue': '#021B51',
        'n-dark': {
          100: '#727D94',
          300: '#4D5566',
          400: '#727D94'
        },
        'cash-green': '#00AD8C',
        'p-blue': '#CAD3FF'
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
