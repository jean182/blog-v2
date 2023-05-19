import { GlobalStyle } from "@assets/styles";
import theme from "@assets/theming";
import { AppThemeProvider } from "@context";
import { AllPostsQuery } from "@shared/interfaces";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";

export default function Layout({ children, data }: PageProps<AllPostsQuery>) {
  const { contact } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <AppThemeProvider>
        <GlobalStyle />
        <Header contact={contact} />
        <main role="main">{children}</main>
        <Footer contact={contact} />
      </AppThemeProvider>
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
        linkedIn
        stackOverflow
      }
    }
  }
`;
