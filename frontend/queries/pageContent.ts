import { gql } from "@apollo/client";
import { GetPageContentResponse, PageContent } from "../types/pageContent";

export const GET_PAGE_CONTENT = gql`
  query GetPageContent($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      card1 {
        cardTitle
        progress1Image {
          node {
            sourceUrl
          }
        }
        progress1Label
        progress2Image {
          node {
            sourceUrl
          }
        }
        progress2Label
        progress3Image {
          node {
            sourceUrl
          }
        }
        progress3Label
      }
      card2 {
        cardImage {
          node {
            sourceUrl
          }
        }
        cardTitle
      }
      packIncludes {
        packItems3
        packItems2
        packItems1
        packIncludesHeading
      }
      accordion {
        accordion1Content
        accordion1Title
        accordion2Content
        accordion2Title
        accordion3Content
        accordion3Title
      }
      pageContent {
        afterTooltipLabel
        beforeTooltipLabel
        footerText
        primaryCta
        section1Title
        section2Title
        logo {
          node {
            sourceUrl
          }
        }
        coachingVideo {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export type GetPageContentQueryResult = {
  page: PageContent;
};
