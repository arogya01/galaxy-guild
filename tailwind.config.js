module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utility/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dk-bluish": "#010929",
        "btn-blue": "hsl(181 ,100% ,44%)",
        "btn-purple": " hsl(299 ,100% ,50%)",
      },
      animation: {
        glow: "glow 8s linear infinite",
      },
      keyFrames: {
        glow: {
          "100%": { backgroundPosition: "300%" },
        },
      },
    },
  },
  plugins: [],
};
