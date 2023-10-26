/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Lato, Arial, sans-serif'
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          xs: '100%',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1420px',
          xxxl: '1640px'
        },
      },
      colors: {
        'purple': '#231E3E',
        'lightPurple': '#C850C0',
      },
      backgroundColor: {
        'card': '#231E3E',
        'input': '#3f3963',
      },
      padding: {
        '100': '100px',
        '70': '70px',
        '50': '50px',
        '30': '30px',
        '12': '12px',
      },
      margin: {
        '50': '50px',
        '70': '70px',
        '12': '12px',
      },
      borderRadius: {
        '8': '8px',
        'half': '50%',
      },
      width: {
        '24': '24px',
      },
      height: {
        '45': '48px',
        '200': '200px',
        '24': '24px'
      },
      fontSize: {
        '36': '36px',
        '30': '30px',
        '26': '26px',
        '20': '20px',
        '16': '16px',
        '12': '12px',
      },
      lineHeight: {
        '40': '40px',
        '34': '34px',
        '30': '30px',
        '26': '26px',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        'gradient-2': 'linear-gradient(43deg,  #FFCC70 0%, #C850C0 46%, #4158D0 100%)',
      },
      minWidth: {
        '1300': '1300px',
        '300': '300px',
        '200': '200px',
      },
      maxWidth: {
        '704': '704px'
      },
    },
  },
  plugins: [],
};