import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { HomeDataProps } from "../shared";
import { PostPreview } from "../components/post-preview";
import { Container } from "../components/container";

const IndexPage: React.FC<PageProps<HomeDataProps>> = ({ data }) => {
  const { allMdx } = data;
  return (
    <Container>
      <h1>All Posts</h1>
      {allMdx.nodes.map(
        ({ id, frontmatter: { author, date, description, slug, title } }) => (
          <PostPreview
            key={id}
            author={author}
            date={date}
            description={description}
            slug={slug}
            title={title}
          />
        )
      )}
    </Container>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    site {
      ...SiteInformation
    }
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          date
          description
          author
        }
      }
    }
  }
`;
