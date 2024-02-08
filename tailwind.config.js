/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xlmax: { max: "90rem" },
        lgmax: { max: "68rem" },
        mdmax: { max: "45rem" },
        smmax: { max: "35rem" },
      },
    },
  },
  plugins: [],
};
