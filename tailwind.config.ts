import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false, // Disable Tailwind's global reset (preflight)
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color using CSS variables
        foreground: "var(--foreground)", // Custom foreground color using CSS variables
      },
      backgroundImage: {
        'win95': "url('/win95bg.webp')", // Reference to an image in the public folder
      },
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))', // Adds support for 24 columns
      },
    },
  },
  plugins: [],
};

export default config;
