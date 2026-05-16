/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0A0A0A',
          secondary: '#111111',
          card: '#161616',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C547',
          dark: '#B8960C',
        },
        red: {
          cta: '#E63946',
        },
        white: {
          DEFAULT: '#F5F5F5',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37, #F5D16E, #D4AF37)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #D4AF37, 0 0 10px #D4AF37' },
          '100%': { boxShadow: '0 0 20px #D4AF37, 0 0 40px #D4AF37' },
        }
      }
    },
  },
  plugins: [],
}
