module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    extend: {
      colors:{
        loginBtn: 'var(--loginBtn)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}