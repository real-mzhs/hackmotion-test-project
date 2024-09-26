"use client";

import { usePageContent } from "@/components/PageContentClientWrapper";
import Image from "next/image";

export default function Nav() {
  const data = usePageContent();
  if (!data) return <div>No content available</div>;

  return (
    <nav className="hidden md:block md:absolute mt-[40px] ml-[40px] text-title text-accent font-medium">
      <Image
        unoptimized
        width={213.48}
        height={32}
        src={data.pageContent.logo.node.sourceUrl}
        alt="Logo"
      />
    </nav>
  );
}
