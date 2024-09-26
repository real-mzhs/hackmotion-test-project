"use client";

import React, { createContext, useContext } from "react";
import { PageContent } from "../types/pageContent";

const PageContentContext = createContext<PageContent | null>(null);

export function usePageContent() {
  const context = useContext(PageContentContext);
  if (context === undefined) {
    throw new Error("usePageContent must be used within a PageContentProvider");
  }
  return context;
}

export default function PageContentClientWrapper({
  children,
  pageContent,
}: {
  children: React.ReactNode;
  pageContent: PageContent;
}) {
  return (
    <PageContentContext.Provider value={pageContent}>
      {children}
    </PageContentContext.Provider>
  );
}
