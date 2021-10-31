module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // height: {
    //   '600px': '600px',
    //   '150px': '150px',
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
