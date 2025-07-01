// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mono: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e1e1e1',
          300: '#cfcfcf',
          400: '#b1b1b1',
          500: '#9e9e9e',
          600: '#7e7e7e',
          700: '#626262',
          800: '#515151',
          900: '#3b3b3b',
        },
        accent: {
          DEFAULT: '#0EA5E9',   // Sky-500
          dark: '#0284C7',      // Sky-600
          light: '#38BDF8',     // Sky-400
        },
      },
    },
  },
  plugins: [],
}
