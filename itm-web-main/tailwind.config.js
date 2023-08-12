/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     screens: {
//       'sm': '576px',
//       // => @media (min-width: 576px) { ... }

//       'md': '960px',
//       // => @media (min-width: 960px) { ... }

//       'lg': '1440px',
//       // => @media (min-width: 1440px) { ... }
//     },
//   }
// }

// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   theme: {
//     screens: {
//       'xs': '475px',
//       ...defaultTheme.screens,
//     },
//   },
//   plugins: [],
// }
