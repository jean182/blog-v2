import { GlobalStyle } from "@assets/styles";
import theme from "@assets/theming";
import { Breadcrumb } from "@components/breadcrumb";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { AppLanguageProvider, AppThemeProvider } from "@context";
import { useIsClient } from "@shared/hooks";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "styled-components";

export default function Layout({
  children,
  data,
  location,
  pageContext,
}: PageProps<
  Queries.HomePageQuery,
  { langKey?: string; isNotFoundPage?: boolean }
>) {
  const { isClient, key } = useIsClient();
  const contact = data?.site?.siteMetadata?.contact;
  const { langKey, isNotFoundPage } = pageContext;

  if (!isClient) return null;

  return (
    <React.Fragment key={key}>
      <AppLanguageProvider langKey={langKey}>
        <ThemeProvider theme={theme}>
          <AppThemeProvider>
            <GlobalStyle />
            <Header contact={contact ?? null} />
            <main role="main">
              <div className="container">
                <Breadcrumb
                  pathname={location.pathname}
                  isNotFoundPage={isNotFoundPage}
                />
                {children}
              </div>
            </main>
            <Footer contact={contact ?? null} />
          </AppThemeProvider>
        </ThemeProvider>
      </AppLanguageProvider>
    </React.Fragment>
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
