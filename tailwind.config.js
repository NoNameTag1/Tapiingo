/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontSize: {
          dynamic: "clamp(14px, 3vw, 16px)", 
          small: '0.75rem',   
          ten: '0.625rem',
        },
        maxWidth: {
            'content': '1000px',
          },
        fontFamily: {
          sans: ['Nunito', 'sans-serif'], 
        },
        fontWeight: {
            'extra-extrabold': 900, 
          },
        colors: {
          primary: "#EFEFFA", 
          secondary: "#1E2C54", 
          darkBlue: "#030027",
          slateGrey: "#555F7D",
          brightBlue: "#0550FF",
          white: "#FFFFFF",
          teal: "#14B8A6",
          blue: "#33A9FF",
        },
        fill: {
          'green-hover': '#008000', 
        },
        strokeWidth: {
            '1.5': '1.5px', 
          },
          stroke: {
            'green': '#00ffff', 
          },
      },
    },
    plugins: [],
  };
  