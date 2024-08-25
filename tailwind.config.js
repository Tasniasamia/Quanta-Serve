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
        primary: "#43b97e",
        textheaderHover:"#417086",
        secondary:"#417086",
        white_hsla: 'hsla(0,0%,100%,0.5)',
        textdark:"#313234",
        textcolor2:"#b5b5bd",
        textcolor1:"#a5a5af",
        light: '#F3F4F9',
      },
      backgroundImage: {
        "gradient-radial": "bg-gradient-to-l from-[#8C7A41] to-[#BFB171]",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        70: '70px',
      },
      spacing: {
        sidebar: 250,
        'sidebar-mini': 65,
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[data-theme="dark"]'],
  // prefix: 'tw-',
};
