/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', 'cursive'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

