/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          "text-blur-in": "text-blur-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   reverse both"
      },
      keyframes: {
          "text-blur-in": {
              "0%": {
                  filter: "blur(.01)"
              },
              to: {
                  filter: "blur(12px) opacity(0%)"
              }
          }
      }
    }
  },
  plugins: [],
}