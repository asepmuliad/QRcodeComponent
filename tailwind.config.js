/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card': '#323A49',
        'cardl': '#ffe474',
        'bgfull': '#1F2632',
        'cardp': '#CEE3E9',
        'cardbut': '#52FFA8',
      },
      fontFamily: {
        'sans': ["Manrope"],
      }
    },
    
  },

  plugins: [],
}

