/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          950: '#1a0a2e',
          900: '#2d1b4e',
          800: '#3f2c5f',
          700: '#523d70',
        },
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
