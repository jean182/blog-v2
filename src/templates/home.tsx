import { SuggestedPosts } from "@components/suggested-posts";
import { AllPostsQuery } from "@shared";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps<AllPostsQuery>> = ({ data }) => {
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
  query($langKey: String!) {
    site {
      ...SiteInformation
    }
    allMdx(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { frontmatter: { date: DESC } }, limit: 5
    ) {
      nodes {
        id
        fields {
          langKey
          slug
        }
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
