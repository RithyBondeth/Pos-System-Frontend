/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a47b6',
        secondary: '#2ecc71',
        success: '#2ecc71',
        warning: '#f1c40f',
        danger: '#e74c3c',
        light: '#ecf0f1',
        dark: '#34495e',
        'accent-light': '#6b7280',
      },
    },
  },
  plugins: [],
}

