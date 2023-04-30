/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['"Urbanist", sans-serif'],
      },
      backgroundColor: {
        body: '#F8F8F8',
        avatar: '#C9CCE8',
        info: '#282828',
        back: '#999999',
        added: '#D9D9D9',
        back2: '#DEDEDE',
        courier: '#3E3E3E',
      },
      colors: {
        title: '#5F5F5F',
        description: '#6F6F6F',
        description2: '#9F9F9F',
      },
    },
  },
  plugins: [],
};
