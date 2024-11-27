/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // '.s/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: ["Montserrat", "sans-serif"],
      colors: {
        main: "#F9B253",
        dark: "#222",
        second: "#475DFC",
        main_dark: "#B36B0B",
        text: {
          secondary: "#888",
        },
      },
      screens: {
        small: "360px",
        // => @media (min-width: 360px) { ... }

        xs: "450px",
        // => @media (min-width: 450px) { ... }

        sm: "576px",
        // => @media (min-width: 576px) { ... }

        ms: "650px",
        // => @media (min-width: 650px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        "2xl": "1200px",
        // => @media (min-width: 1200px) { ... }

        "4xl": "1300px",
        // => @media (min-width: 1200px) { ... }

        "6xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "8xl": "1540px",
        // => @media (min-width: 1540px) { ... }
      },
    },
  },
  plugins: [],
};
