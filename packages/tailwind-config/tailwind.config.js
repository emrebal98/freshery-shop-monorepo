/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        200: '#F4F8EC',
        300: '#C8DEB3',
        400: '#92C064',
        500: '#6A983C',
        600: '#46760A',
      },
      gray: {
        200: '#FDFDFD',
        300: '#F9F9F9',
        400: '#F5F5F5',
        500: '#EBEBEB',
        600: '#D1D1D1',
        700: '#A9A9A9',
        800: '#575757',
        900: '#151515',
      },
      brown: {
        200: '#FFF9F0',
        300: '#FAEDD8',
        400: '#ECD2A6',
        500: '#D0A866',
        600: '#B28A48',
      },
      red: {
        200: '#FFF1ED',
        300: '#F7C6B7',
        400: '#EB8D70',
        500: '#E5704B',
        600: '#C7522D',
      },
      turquoise: {
        200: '#ECF6F6',
        300: '#B9E6E8',
        400: '#7CD0D3',
        500: '#37D0D6',
        600: '#19B2B8',
      },
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      lg: '15px',
      xl: '17px',
      '2xl': '18px',
      '3xl': '22px',
      '4xl': '26px',
      '5xl': '32px',
    },
  },
  plugins: [],
};
