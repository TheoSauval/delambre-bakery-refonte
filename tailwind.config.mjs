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
        curtainUp: 'curtainUp 1s cubic-bezier(0.65,0,0.35,1) 1.4s forwards',
        timerFill: 'timerFill 1.4s ease-in-out forwards',
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
        curtainUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        timerFill: {
          '0%': { transform: 'scaleX(0)' },


          '60%': { transform: 'scaleX(0.63)' },
          '78%': { transform: 'scaleX(0.68)' },
          '92%': { transform: 'scaleX(0.9)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
