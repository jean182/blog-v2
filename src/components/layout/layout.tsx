import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../assets/styles/global";
import theme from "../../assets/theming";
import { HomeDataProps } from "../../shared";
import { Header } from "../header";
import { StyledLayout } from "./layout.styled";

export default function Layout({ children, data }: PageProps<HomeDataProps>) {
  const { title, contact } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header contact={contact} title={title} />
      <StyledLayout>{children}</StyledLayout>
    </ThemeProvider>
  );
}

export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      description
      siteUrl
      contact {
        github
        instagram
        linkedIn
        stackOverflow
      }
    }
  }
`;
