import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import * as React from "react";
import GlobalStyle from "../../assets/styles/global";
import { Header } from "../header";
import { IndexData } from "../../shared";

export default function Layout({ children, data }: PageProps<IndexData>) {
  const { title, contact } = data.site.siteMetadata;

  return (
    <>
      <GlobalStyle />
      <Header contact={contact} title={title} />
      <main>{children}</main>
    </>
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
