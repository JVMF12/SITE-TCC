/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botaoSelecionado: '#FCAD00',
        naoSelecionado: '#FFF',
        fundoHeader: '#2E5339',
        fundoSite: '#EDEEEF',
        bgCaixa: '#2E5339',
        text: '#3f4249',
        titulo: '#FCAD00',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        openSans: ['Open Sans', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        baloo: ['Baloo 2', 'sans-serif'],
        orani: ['Oranienbaum', 'serif'],
        subtitulo: ['Source Serif ', 'serif'],
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
        bottom: '2rem',
        top: '3rem',
        inline: '1.5rem',
        box: '1.75rem',
      },
      padding: {
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

