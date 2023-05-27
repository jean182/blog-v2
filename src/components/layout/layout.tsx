import { GlobalStyle } from "@assets/styles";
import theme from "@assets/theming";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { AppThemeProvider } from "@context";
import { AllPostsQuery } from "@shared/interfaces";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "styled-components";

export default function Layout({ children, data }: PageProps<AllPostsQuery, { langKey?: string }>) {
  const contact = data?.site?.siteMetadata?.contact;

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
