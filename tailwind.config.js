/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-bg-secondary)",
        text: "var(--color-text)",
        text2: "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        accentdark: "var(--color-accent-dark)",
        border: "var(--color-border)",
        btn: "var(--color-btn)",
        btntext: "var(--color-btn-text)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
