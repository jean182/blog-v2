import { GlobalStyle } from "@assets/styles";
import theme from "@assets/theming";
import { Breadcrumb } from "@components/breadcrumb";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { AppLanguageProvider, AppThemeProvider } from "@context";
import { SSRProvider } from "@restart/ui/ssr";
import { useIsClient } from "@shared/hooks";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

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
  const navRef = React.useRef<HTMLDivElement>(null);
  const contact = data?.site?.siteMetadata?.contact;
  const { langKey, isNotFoundPage } = pageContext;

  if (!isClient) return null;

  return (
    <React.Fragment key={key}>
      <SSRProvider>
        <AppLanguageProvider langKey={langKey}>
          <StyledComponentsThemeProvider theme={theme}>
            <AppThemeProvider>
              <GlobalStyle />
              <Header contact={contact ?? null} navRef={navRef} />
              <main role="main">
                <div className="container">
                  <Breadcrumb
                    pathname={location.pathname}
                    isNotFoundPage={isNotFoundPage}
                  />
                  {children}
                </div>
              </main>
              <Footer contact={contact ?? null} navRef={navRef} />
            </AppThemeProvider>
          </StyledComponentsThemeProvider>
        </AppLanguageProvider>
      </SSRProvider>
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
