import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenTab: '#1D4B45',
        lightBg: '#F9F9F8',
        subTabBg: '#F2F1EB',
        darkText: '#0F2C2C',
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bubbleRise: {
          "0%": { transform: "translateY(0)", opacity: "0.5" },
          "100%": { transform: "translateY(-60px)", opacity: "0" },
        },
        scrollText: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },



      // animation: {
      //   'bounce-slow': 'bounce 7s infinite',
      //   fadeUp: 'fadeUp 1s ease-out forwards',
      //   bubble: 'bubbleRise 2s ease-out infinite',
      //   scroll: 'scroll 40s linear infinite',
      //   scrollText: 'scrollText 30s linear infinite',
      //   scrollX: 'scrollX 60s linear infinite',
      //   typing: 'typing 4s steps(30, end) forwards',
      //   blink: 'blink 0.7s step-end infinite',
      //   'gradient-x': 'gradientX 4s linear infinite',
      // },

    },
  },
  plugins: [],
} satisfies Config;
