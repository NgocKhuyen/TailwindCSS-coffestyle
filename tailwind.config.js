/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html",
        "./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            Karla: ['Karla', 'sans-serif']
        },
        colors: {
            'coffee': {
                50: '#e8d6d0',
                200: '#c89F94',
                300: '#a25f4b',
                400: '#743f2f'      
            }
        },
        keyframes: {
            slideDown: {
                '0%': { transform: 'translateY(-100%)' },
                '100%': { transform: 'translateY(0)' },
            }
        },
        animation: {
            slideDown: 'slideDown 0.4s ease-in-out',
        }
    },
  },
  plugins: [],
}

