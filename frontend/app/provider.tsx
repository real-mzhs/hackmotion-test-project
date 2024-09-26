import PageContentFetcher from "@/components/PageContentFetcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return <PageContentFetcher slug="main">{children}</PageContentFetcher>;
}
