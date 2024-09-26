import {
  GET_PAGE_CONTENT,
  GetPageContentQueryResult,
} from "../queries/pageContent";
import createApolloClient from "../lib/apollo-client";
import PageContentClientWrapper from "./PageContentClientWrapper";

export default async function PageContentFetcher({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const client = createApolloClient();

  try {
    const { data, error } = await client.query<GetPageContentQueryResult>({
      query: GET_PAGE_CONTENT,
      variables: { slug },
    });

    if (error) {
      console.log("Error fetching page content:", error);
      return <div>Error loading content</div>;
    }

    return (
      <PageContentClientWrapper pageContent={data.page}>
        {children}
      </PageContentClientWrapper>
    );
  } catch (error) {
    console.log("Error fetching page content:", error);
    return <div>Error loading content</div>;
  }
}
