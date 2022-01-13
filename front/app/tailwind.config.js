module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 5px 5px black',
        },
        '.text-shadow-md': {
          textShadow: '0px 3px 3px black',
        },
        '.text-shadow-lg': {
          textShadow: '0px 5px 3px black',
        },
        '.text-shadow-xl': {
          textShadow: '0px 7px 3px black',
        },
        '.text-shadow-2xl': {
          textShadow: '0px 10px 3px black',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.bg-gradient-home': {
          backgroundImage: "url('public/TheAppleEcosystem.png')",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
