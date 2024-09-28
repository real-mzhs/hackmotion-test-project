import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import PageContentFetcher from "@/components/PageContentFetcher";
import StyleProvider from "@/components/StyleProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsWrapper>
      <StyleProvider>
        <PageContentFetcher slug="main">{children}</PageContentFetcher>
      </StyleProvider>
    </AnalyticsWrapper>
  );
}
