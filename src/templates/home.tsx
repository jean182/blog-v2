import { SuggestedPosts } from "@components/suggested-posts";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = ({ data }) => {
  const { allMdx } = data;
  const { nodes } = allMdx;
  return <SuggestedPosts nodes={nodes} />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query HomePage($langKey: String!) {
    site {
      ...SiteInformation
    }
    allMdx(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
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
