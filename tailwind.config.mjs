/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blanccasse: 'var(--blanccasse)',
        rougecerise: 'var(--rougecerise)',
      },
      animation: {
        fadeIn: 'fadeIn 2.5s ease-in-out',
        slide: "slide 10s linear infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateZ(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
