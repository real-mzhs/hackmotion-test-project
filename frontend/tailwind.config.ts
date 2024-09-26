import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
      fontSize: {
        footer: ["12px", "16px"],
        xs: ["14px", "18px"],
        sm: ["16px", "24px"],
        base: ["20px", "30px"],
        md: ["24px", "31.2px"],
        lg: ["24px", "36px"],
        title: ["32px", "41.6px"],
        xl: ["48px", "62.4px"],
      },
    },
  },
  plugins: [],
};
export default config;
