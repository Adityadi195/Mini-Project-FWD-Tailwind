/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        primary: '#125CED',
        dark: {
          900: '#0D121C',
        },
        text: {
          primary: '#0D121C',
          secondary: '#4D6699',
        },
        slate: {
          50: '#F7FAFC',
        },
        gray: {
          100: '#E8EBF2',
          200: '#E6E8EB',
          300: '#CFD6E8',
        },
      },
      spacing: {
        '65px': '65px',
      },
      width: {
        '301px': '301px',
        '597px': '597px',
        '896px': '896px',
      },
      height: {
        '65px': '65px',
        '176px': '176px',
        '169px': '169px',
        '178px': '178px',
      },
    },
  },
  plugins: [],
};
