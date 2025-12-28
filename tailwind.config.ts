import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0C5146',
          green: '#2D9766',
          sage: '#61A887',
          pink: '#EC7281',
          blue: '#AFE0EE',
          surface: '#F4F9F8'
        },
        ink: {
          50: '#F7FAFC',
          900: '#070A0E',
          950: '#05070A'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-arabic)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-space)', 'ui-sans-serif', 'system-ui'],
        arabic: ['var(--font-arabic)', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(246, 119, 130, 0.25), 0 12px 40px rgba(12, 85, 74, 0.25)',
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        aurora: {
          '0%': { transform: 'translate3d(-10%, -10%, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(10%, 10%, 0) rotate(180deg)' },
          '100%': { transform: 'translate3d(-10%, -10%, 0) rotate(360deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        aurora: 'aurora 18s linear infinite'
      }
    }
  },
  plugins: [typography]
} satisfies Config;
