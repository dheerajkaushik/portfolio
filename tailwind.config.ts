import type { Config } from "next";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}", // This ensures your data file is scanned if needed
  ],
  theme: {
    extend: {
        animation: {
                "meteor": "meteor 5s linear infinite", // <--- ADD THIS
              },
              keyframes: {
                meteor: { // <--- ADD THIS BLOCK
                  "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                  "70%": { opacity: "1" },
                  "100%": {
                    transform: "rotate(215deg) translateX(-500px)",
                    opacity: "0",
                  },
                },
              },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Note: If this causes an error, delete this line
  ],
};
export default config;