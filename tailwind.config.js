/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#5B5FC7",
        customBlack: "#242424",
        customGray: "#616161",
      },
      boxShadow: {
        custom: '0px 2px 4px 0px rgba(0, 0, 0, 0.14)', 
        customSearch: '0px 0px 3px 0px rgba(0, 0, 0, 0.12)',
        customSidebar: '0px 0px 3px 0px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(90deg, rgba(204, 204, 204, 0) 0%, rgba(190, 190, 190, 0.2) 100%, rgba(173, 173, 173, 0.2) 100%, rgba(173, 173, 173, 0.2) 100%)',
      },
    },
  },
  plugins: [],
};
