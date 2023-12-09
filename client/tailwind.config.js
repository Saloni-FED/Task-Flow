/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        d_green: "#00ad6a",
        l_green: "#1fe374",
        b: "#d6dae5",
        l_blue: "#d6dae5",
        custom_black: "#080c16",
        custom_white: "#fcfcfc",
      },
      fontFamily:{
        logo:['Rubik Bubbles'],
        body:"'Work Sans'",
        rest:"'Palanquin Dark'"
      }
    },
  },
  plugins: [],
};
