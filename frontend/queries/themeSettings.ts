import { gql } from "@apollo/client";

export const GET_THEME_SETTINGS = gql`
  query GetThemeSettings {
    themeSettings {
      primaryColor
      secondaryColor
      textColor
      fontSize
      lineHeight
    }
  }
`;
