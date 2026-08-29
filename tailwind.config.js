/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          DEFAULT: '#0d1017',
          elevated: '#131822',
          card: '#10141d',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(56, 189, 248, 0.35)',
        },
        accent: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          indigo: '#6366f1',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
        tech: {
          muted: '#71717a',
          dim: '#a1a1aa',
          subtle: '#3f3f46',
          bright: '#f4f4f5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'grid-flow': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-glow': 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 70%)',
        'emerald-glow': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.12), transparent 70%)',
      }
    },
  },
  plugins: [],
}
