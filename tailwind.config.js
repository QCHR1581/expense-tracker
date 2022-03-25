module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1026px',
      // => @media (min-width: 1026px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
