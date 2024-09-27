"use client";

import { useEffect, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface AnalyticsWrapperProps {
  children: ReactNode;
}

export default function AnalyticsWrapper({
  children,
}: Readonly<AnalyticsWrapperProps>) {
  useEffect(() => {
    trackEvent("pageView");
  }, []);

  return <>{children}</>;
}
