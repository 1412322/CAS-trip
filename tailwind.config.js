/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    keyframes: {
      shine: {
        '0%': { backgroundPosition: '200% 0, 0 0' },
        '20%': { backgroundPosition: '-100% 0, 0 0' },
        '100%': { backgroundPosition: '-100% 0, 0 0' },
      },
      'shine-hover': {
        '0%': { backgroundPosition: '200% 0, 0 0' },
        '100%': { backgroundPosition: '-100% 0, 0 0' },
      },
    },
    animation: {
      shine: 'shine 3s linear infinite',
      'shine-hover': 'shine-hover 0.3s linear',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
