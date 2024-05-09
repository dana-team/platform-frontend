/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        18: "66px",
      },
      colors: {},
      backgroundColor: {
        primary: "#171717",
        secondary: "#262626",
        neutral: "black",
      },
      textColor: {
        primary: "#78716c",
        secondary: "#78716c",
        neutral: "#a8a29e",
      },
    },
  },
  plugins: [],
};
