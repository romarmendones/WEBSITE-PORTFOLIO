/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Elegant Minimalism palette: Crisp white, light gray, and deep charcoal
        primary: {
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f3f3f3',
          300: '#e8e8e8',
          400: '#d4d4d4',
          500: '#a0a0a0',
          600: '#6b6b6b',
          700: '#4a4a4a',
          800: '#2d2d2d',
          900: '#1a1a1a',
        },
        secondary: {
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f0f0f0',
          300: '#e5e5e5',
          400: '#d0d0d0',
          500: '#b0b0b0',
          600: '#808080',
          700: '#5a5a5a',
          800: '#3a3a3a',
          900: '#1f1f1f',
        },
        // Brand accent - deep charcoal for minimalist elegance
        brand: '#2d2d2d'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 