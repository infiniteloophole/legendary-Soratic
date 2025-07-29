/**
 * TailwindCSS configuration for NativeWind.
 * Only black & white colors are defined to enforce the pure monochrome theme.
 * All project files under `app` and `components` are scanned for class names.
 */
module.exports = {
  presets: [require('nativewind/tailwind/native')],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        none: '0',
        sm: '4px',
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
};
