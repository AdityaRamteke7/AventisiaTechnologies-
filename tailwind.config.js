export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        github: {
          dark: {
            bg: "#0d1117",
            text: "#c9d1d9",
            border: "#30363d",
            header: "#161b22",
          },
          light: {
            bg: "#ffffff",
            text: "#24292f",
            border: "#d0d7de",
            header: "#f6f8fa",
          },
        },
      },
    },
  },
  plugins: [],
};
