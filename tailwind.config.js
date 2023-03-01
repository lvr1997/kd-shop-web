/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: { // [!code focus:5]
        primary: '#1D2129', //标题
        regular: '#4E5969', //次标题
        secondary: '#86909C', //次要信息
        disabled: '#C9CDD4', //置灰信息
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
