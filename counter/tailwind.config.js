/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dots: ['RalewayDots', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-150%)',
          },
          '90%': {
            opacity: 1,
            transform: 'translateX(10%)',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
          },
        },
        'fade-out': {
          '0%': {
            opacity: 1,
            transform: 'translateX(0%)',
          },
          '10%': {
            opacity: 1,
            transform: 'translateX(10%)',
          },
          '90%': {
            opacity: 1,
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(-150%)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
