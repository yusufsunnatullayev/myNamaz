/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#11111D",
        green: "rgb(36, 187, 119)",
        gray: "rgb(150, 153, 177)",
        lightBlue: "rgb(47, 49, 66)",
      },
    },
  },
  plugins: [],
};
