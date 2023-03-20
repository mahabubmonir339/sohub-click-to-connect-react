// /** @type {import('tailwindcss').Config} */ 
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(34 211 238)",
          secondary: "#f5a623",
          accent: "#fb923c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}