import { StyledPost } from "@assets/styles";
import { pre } from "@components/code";
import { Link } from "@components/link";
import { PostWrapper as wrapper } from "@components/post-wrapper";
import { VideoPlayer } from "@components/video-player";
import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import React from "react";

const shortcodes = { pre, Link, VideoPlayer, wrapper }; // Provide common components here

export default function PostTemplate({ data, children }: PageProps<any>) {
  return (
    <StyledPost className="container">
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </StyledPost>
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
