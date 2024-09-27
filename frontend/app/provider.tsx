import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import PageContentFetcher from "@/components/PageContentFetcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsWrapper>
      <PageContentFetcher slug="main">{children}</PageContentFetcher>
    </AnalyticsWrapper>
  );
}
