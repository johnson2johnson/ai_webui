import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        accent: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff"
        }
      },
      borderRadius: {
        sm: "4px",
        md: "12px",
        lg: "16px"
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        'content': '1280px'
      },
      padding: {
        'responsive': 'clamp(16px, 5vw, 48px)'
      }
    },
  },
  plugins: [],
};

export default config;