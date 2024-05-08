const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "headline-9xl": [
        "128px",
        {
          font: "Red Hat Display",
          lineHeight: "1",
          letterSpacing: "normal",
          fontWeight: "700",
        },
      ],
      "headline-xl": [
        "28px",
        {
          font: "Red Hat Display",
          lineHeight: "37.04px",
          letterSpacing: "normal",
          fontWeight: "700",
        },
      ],
      "headline-lg": [
        "24px",
        {
          font: "Red Hat Display",
          lineHeight: "31.75px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "headline-md": [
        "20px",
        {
          font: "Red Hat Display",
          lineHeight: "26.46px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "headline-sm": [
        "18px",
        {
          font: "Red Hat Display",
          lineHeight: "23.81px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "headline-xs": [
        "16px",
        {
          font: "Red Hat Display",
          lineHeight: "21.17px",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      "label-lg": [
        "15px",
        {
          font: "Red Hat Text",
          lineHeight: "19.85px",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      "label-md": [
        "13px",
        {
          font: "Red Hat Text",
          lineHeight: "17.2px",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      "label-sm": [
        "12px",
        {
          font: "Red Hat Text",
          lineHeight: "15.88px",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      "label-xs": [
        "9px",
        {
          font: "Red Hat Text",
          lineHeight: "15.88px",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      "body-xl": [
        "16px",
        {
          font: "Red Hat Text",
          lineHeight: "21.17px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      "body-lg": [
        "14px",
        {
          font: "Red Hat Text",
          lineHeight: "18.52px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      "body-md": [
        "13px",
        {
          font: "Red Hat Text",
          lineHeight: "17.2px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      "body-sm": [
        "12px",
        {
          font: "Red Hat Text",
          lineHeight: "15.88px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      "accent-lg": [
        "14px",
        {
          font: "Red Hat Display",
          lineHeight: "18.52px",
          fontWeight: "700",
        },
      ],
      "accent-md": [
        "13px",
        {
          font: "Red Hat Display",
          lineHeight: "17.2px",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      mono: [
        "12px",
        {
          font: "Red Hat Mono",
          lineHeight: "15.88px",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      padding: {
        0.75: "3px",
        1.25: "5px",
        2.25: "9px",
        4.25: "17px",
        5.5: "22px",
      },
      backgroundImage: {
        "login-pattern": "url('/public/login-background.png')",
      },
      fontFamily: {
        sans: ['"Red Hat Display"', '"Red Hat Text"', "sans-serif"],
        mono: ['"Red Hat Mono"', "monospace"],
      },
      width: {
        18: "66px",
        35: "140px",
        65: "262px",
        100: "421px",
        150: "620px",
      },
      height: {
        13: "52px",
        17: "70px",
        25: "106px",
        85: "330px",
      },
      colors: {
        "mono/basic": {
          1: "#FFFFFF",
          4: "#B6C2CF",
          3: "#C7D1DB",
          5: "#9FADBC",
          7: "#738496",
          8: "#596773",
          9: "#454F59",
          10: "#38414A",
          11: "#2C333A",
          12: "#282E33",
          13: "#22262B",
          14: "#1D2125",
          15: "#161A1D",
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
    },
  },
  plugins: [],
};
