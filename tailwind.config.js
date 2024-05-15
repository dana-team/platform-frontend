const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "headline-xl": [
        "28px",
        {
          lineHeight: "37.04px",
          letterSpacing: "normal",
          fontWeight: "700",
        },
      ],
      "headline-lg": [
        "24px",
        {
          lineHeight: "31.75px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "headline-md": [
        "20px",
        {
          lineHeight: "26.46px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "headline-sm": [
        "18px",
        {
          lineHeight: "23.81px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "headline-xs": [
        "16px",
        {
          lineHeight: "21.17px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "label-md": [
        "13px",
        {
          lineHeight: "17.2px",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      "body-lg": [
        "14px",
        {
          lineHeight: "18.52px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      "body-sm": [
        "12px",
        {
          lineHeight: "15.88px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      padding: {
        0.75: "3px",
        2.25: "9px",
      },
      backgroundImage: {
        "login-pattern": "url('public/login-background.png')",
      },
      fontFamily: {
        sans: ["Red Hat Display", "Red Hat Text", "sans-serif"],
      },
      width: {
        18: "66px",
        35: "140px",
        150: "620px",
      },
      height: {
        13: "52px",
        85: "330px",
      },
      colors: {
        "mono/basic": {
          1: "#FFFFFF",
          4: "#B6C2CF",
          5: "#9FADBC",
          8: "#596773",
          10: "#38414A",
          11: "#2C333A",
          12: "#282E33",
          14: "#1D2125",
          15: "#161A1D",
          13: "#22262B",
          16: "#101214",
        },
        "green/basic": {
          5: "#3EECAE",
          6: "#2ACA90",
          7: "#19A874",
        },
        "velvet/basic": {
          5: "#EC3E7D",
        },
      },
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
