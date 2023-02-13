/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bgBlack: "#262626",
        grey: "#D7D9DD",
        textPrimary: "#F9F9F9",
        highlight: "#B286FD",
      },
    },
  },
  plugins: [],
};
