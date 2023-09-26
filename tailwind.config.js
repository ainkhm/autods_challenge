/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#1B1B1B",
        "strawberry-red": "#ff0000",
      },
    }
  },
  plugins: []
}
