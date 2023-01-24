/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainButtonColor: '#62A1EB',
        hoverButtonColor: '#317AD0',
        focusButtonColor: '#1A5DAB',
        successBGColor: '#4A4A4A',
        radioButtonColor: '#4D9AC3',
        cardBGColor: '#EAFAFF',
      },
    },
  },
  plugins: [],
}
