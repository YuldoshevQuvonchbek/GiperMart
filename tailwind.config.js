/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1440px",
        },
        padding: "20px",
      },
    },
    colors: {
      emptiness: "#FCFCFC",
      vegan: "#1FB94A",
      wayt: "#fff",
    },
  },
  plugins: [],
};
