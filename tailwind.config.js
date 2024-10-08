/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012d4b', // Custom primary color
        secondary: '#000111', // Custom secondary color
        fontwhite:'#ffffff',
      },
      fontFamily: {
        custom: ['"Comic Sans MS"', 'cursive'], // Custom font family
      },
      spacing: {
        '72': '18rem', // Custom spacing
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [    require('flowbite/plugin'),]
}


//  "./src/**/*.{js,ts,jsx,tsx}", 
//In my src folder anything(file) ending with any of the above extension then please look for it
// it might contain the tailwind logic



