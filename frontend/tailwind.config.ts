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
        footer: ["var(--footer-font-size)", "1.333"],
        xs: ["var(--xs-font-size)", "1.286"],
        sm: ["var(--sm-font-size)", "1.5"],
        base: ["var(--base-font-size)", "1.5"],
        md: ["var(--md-font-size)", "1.3"],
        lg: ["var(--lg-font-size)", "1.5"],
        title: ["var(--title-font-size)", "1.3"],
        xl: ["var(--xl-font-size)", "1.3"],
      },
    },
  },
  plugins: [],
};

export default config;
