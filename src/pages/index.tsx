import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { HomeDataProps } from "../shared";
import { SuggestedPosts } from "../components/suggested-posts";

const IndexPage: React.FC<PageProps<HomeDataProps>> = ({ data }) => {
  const { allMdx } = data;
  return (
    <div className="container">
      <SuggestedPosts nodes={allMdx.nodes} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    site {
      ...SiteInformation
    }
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 5) {
      nodes {
        id
        frontmatter {
          slug
          title
          date
          description
          author
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
            }
          }
        }
      }
    }
  }
`;
