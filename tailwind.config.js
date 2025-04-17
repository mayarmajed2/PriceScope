/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#f5f6fa',
        lightFg: '#1a1b2f',
        softIndigo: '#b8c1ec',
        pastelLavender: '#d9d4f1',
        borderSoft: '#e4e4f0',
        mintGlow: '#bafff0',
        steelMuted: '#888ea2',
      }
    }
    
  },
  plugins: []
};
