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
        bgCaixa: '#87BFDD',
        text: '#3f4249',
        titulo: '#216487',
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
        customPedro: '1.188rem'
      },
      margin: {
        custom: '45rem',
        bottom: '.8rem',
        top: '.8rem',
        inline: '1rem',
        desk: '1.5rem',
      },
      custom: {
        with: '50rem',
        max: '50rem',
      }
    },
  },
  plugins: [],
}

