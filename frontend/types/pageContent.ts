interface ImageNode {
  node: {
    sourceUrl: string;
  };
}

interface VideoNode {
  node: {
    mediaItemUrl: string;
  };
}

interface Card1 {
  cardTitle: string;
  progress1Image: ImageNode;
  progress1Label: string;
  progress2Image: ImageNode;
  progress2Label: string;
  progress3Image: ImageNode;
  progress3Label: string;
}

interface Card2 {
  cardImage: ImageNode;
  cardTitle: string;
}

interface PackIncludes {
  packItems1: string;
  packItems2: string;
  packItems3: string;
  packIncludesHeading: string;
}

interface Accordion {
  accordion1Content: string;
  accordion1Title: string;
  accordion2Content: string;
  accordion2Title: string;
  accordion3Content: string;
  accordion3Title: string;
}

interface PageContentSection {
  afterTooltipLabel: string;
  beforeTooltipLabel: string;
  footerText: string;
  primaryCta: string;
  section1Title: string;
  section2Title: string;
  logo: ImageNode;
  coachingVideo: VideoNode;
}

export interface PageContent {
  title: string;
  card1: Card1;
  card2: Card2;
  packIncludes: PackIncludes;
  accordion: Accordion;
  pageContent: PageContentSection;
}

export interface GetPageContentResponse {
  page: PageContent;
}
