/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#001529", // Finkash Midnight
          accent: "#D8F34E",  // Finkash Lime Green
          light: "#F8F9FA",   // Soft Corporate Gray
          dark: "#000B14",    // Deep Ground
        }
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.02em",
        widest: "0.4em",
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
