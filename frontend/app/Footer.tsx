"use client";

import { usePageContent } from "@/components/PageContentClientWrapper";

export default function Footer() {
  const data = usePageContent();

  if (!data) return <div>No content available</div>;

  return (
    <footer className="w-full bg-black px-2 py-6">
      <p className="text-center text-white text-footer">
        {data.pageContent.footerText}
      </p>
    </footer>
  );
}
