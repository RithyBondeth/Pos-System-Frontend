/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-primary", "hover:bg-white", "hover:text-primary", "hover:border-primary",
    "bg-secondary", "hover:text-secondary", "hover:border-secondary",
    "bg-success", "hover:text-success", "hover:border-success",
    "bg-warning", "hover:text-warning", "hover:border-warning",
    "bg-danger", "hover:text-danger", "hover:border-danger",
    "bg-light", "hover:text-light", "hover:border-light",
    "bg-dark", "hover:text-dark", "hover:border-dark"
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

