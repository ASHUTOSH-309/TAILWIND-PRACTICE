/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [    require('flowbite/plugin'),]
}
//  "./src/**/*.{js,ts,jsx,tsx}", 
//In my src folder anything(file) ending with any of the above extension then please look for it
// it might contain the tailwind logic