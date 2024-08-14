/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botaoSelecionado: '#216487',
        naoSelecionado: '#FFF',
        fundoHeader: '#87BFDD',
        fundoSite: '#EDEEEF',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        openSans: ['Open Sans', 'sans-serif']
      },
      letterSpacing: {
         ultraWidest: '0.25em',
      },
      borderRadius: {
        custom: '2.188rem',
      },
      margin: {
        custom: '45rem',
      },
    },
  },
  plugins: [],
}

