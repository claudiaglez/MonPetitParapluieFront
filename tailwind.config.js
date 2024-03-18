/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'beige-bg': '#FAF0CA',
        'indigo': '#0541B2',
        'pomme': '#308006',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}

