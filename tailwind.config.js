/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        overallBG: '#04052e',
        sectionBG: '#0d00a4',
        heading: '#ebf2fa',
        paragraph: '#ebf2fa',
        btnDark: '#3c096c',
        btnLight: '#e0aaff',
        overlayBg: "rgba(0,0,0,0.3)",
        navUnderLine: '#fff6cc',
        piink: '#F62B86',
        yeellow: '#FFD500',
      },
      keyframes:{
        fullSpin:{
          '100%':{
            transform:'rotate(-360deg)'
          }
        }
      },
      animation:{
        fullSpin:'fullSpin 5s linear infinite'
      },
      backgroundImage:{
        'parallax': 'url("./assets/AboutParallax.png")'
      }
    },
  },
  plugins: [],
}

