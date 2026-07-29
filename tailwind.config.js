/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFBF7',
          100: '#F5EFDF',
          200: '#EBE2CD',
          300: '#D8C9A6',
          400: '#C5AE86',
          800: '#7A6347',
        },
        sage: {
          50:  '#F2F6F3',
          100: '#E1EBE4',
          200: '#C0D6C7',
          300: '#A3C4AC',
          400: '#74A880',
          500: '#4A7C59',
          600: '#3A6347',
          700: '#2D5A3F',
          800: '#234832',
          900: '#1E3A2B',
        },
        gold: {
          300: '#F3E5AB',
          400: '#E8CA60',
          500: '#D4AF37',
          600: '#AA820A',
          700: '#8B6509',
          800: '#6D4F07',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow':     'float 6s ease-in-out infinite',
        'pulse-subtle':   'pulseSubtle 3s ease-in-out infinite',
        'spin-slow':      'spin 12s linear infinite',
        'in':             'fadeIn 0.3s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.7 },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'scale(0.97)' },
          to:   { opacity: 1, transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
