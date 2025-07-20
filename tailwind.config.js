/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
      },
      colors: {
        primary: '#F1A501', // Jadoo Orange
        secondary: '#181E4B', // Dark Blue
        textGray: '#5E6282', // Paragraph/light text
        lightOrangeBg: '#FFF1DA', // Light orange background for sections
        lightBlueBg: '#DFD7F9', // Testimonial section background
        lightPinkBg: '#FCFCFD', // Subscribe section background
        gradientStart: '#FF946D',
        gradientEnd: '#FF7D68',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        planeFly: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -15px) rotate(5deg)' },
          '50%': { transform: 'translate(0, 0) rotate(0deg)' },
          '75%': { transform: 'translate(-20px, 15px) rotate(-5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        planeFly: 'planeFly 8s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        wave: 'wave 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};