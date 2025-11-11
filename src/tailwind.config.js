// tailwind.config.js
export default {
  content: ["./main.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D",
          dark: "#D97706",
        },
        beige: {
          DEFAULT: "#FDE68A",
          light: "#FEF3C7",
          dark: "#FACC15",
        },
        blue: {
          DEFAULT: "#3B82F6",
          light: "#93C5FD",
          dark: "#1E40AF",
        },
        green: {
          DEFAULT: "#34D399",
          light: "#6EE7B7",
          dark: "#059669",
        },
        gray: {
          DEFAULT: "#374151",
          light: "#9CA3AF",
          dark: "#111827",
        },
      },
    },
  },
};
