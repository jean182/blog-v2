import { Hero } from "@components/hero";
import { SuggestedPosts } from "@components/suggested-posts";
import { formatPostLink } from "@shared/formatting";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

type HomeNode = Queries.HomePageQuery["allMdx"]["nodes"][0];

const renderHero = (node: HomeNode | undefined) => {
  if (!node || !node.frontmatter) return null;

  const { id } = node;
  const { langKey, slug: rawSlug } = node.fields;
  const { author, date, description, title, featuredImage } = node.frontmatter;
  const slug = formatPostLink(langKey, rawSlug);
  return (
    <Hero
      author={author ?? ""}
      date={date ?? ""}
      description={description ?? ""}
      slug={slug}
      title={title ?? ""}
      featuredImage={featuredImage as Queries.File}
      key={id}
    />
  );
};

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = ({ data }) => {
  const { allMdx } = data;
  const { nodes } = allMdx;
  const heroNode = nodes.find((node) => !!node.frontmatter?.featuredImage);
  const { id } = heroNode!;
  const filterById = (node: HomeNode) => node.id !== id;

  return (
    <>
      {renderHero(heroNode)}
      <SuggestedPosts nodes={nodes.filter(filterById)} />
    </>
  );
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
              gatsbyImageData(layout: CONSTRAINED, width: 150, height: 150)
            }
          }
        }
      }
    }
  }
`;
