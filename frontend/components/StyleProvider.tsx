// app/components/StyleProvider.tsx
import { ReactNode } from "react";
import { cookies } from "next/headers";

interface Styles {
  [key: string]: string;
}

async function fetchStyles(): Promise<Styles> {
  try {
    const res = await fetch(
      "http://wordpress:80/wp-json/hackmotion/v1/styles",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch styles");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching styles:", error);
    return {}; // Return default styles or handle error as appropriate
  }
}

interface StyleProviderProps {
  children: ReactNode;
}

export default async function StyleProvider({ children }: StyleProviderProps) {
  const styles = await fetchStyles();

  // Convert styles to CSS custom properties
  const cssVars = Object.entries(styles)
    .map(([key, value]) => `--${key}: ${value}`)
    .join(";");

  return <div style={{ [cssVars]: "" }}>{children}</div>;
}
