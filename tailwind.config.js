/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#160c0f",
        bgButtonColor: "red",
        bgInputColor: "#262a34",
      },
    },
  },
  plugins: [],
};
