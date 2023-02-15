import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../assets/styles/global";
import theme from "../../assets/theming";
import { HomeDataProps } from "../../shared";
import { Footer } from "../footer";
import { Header } from "../header";

export default function Layout({ children, data }: PageProps<HomeDataProps>) {
  const { contact } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header contact={contact} />
      <main role="main">{children}</main>
      <Footer contact={contact} />
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
