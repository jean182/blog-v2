import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { Container } from "../components/container";
import { VideoPlayer } from "../components/video-player";

const shortcodes = { Link, VideoPlayer }; // Provide common components here

export default function PostTemplate({ data, children }: PageProps<any>) {
  return (
    <Container>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Container>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    site {
      ...SiteInformation
    }
  }
`;
