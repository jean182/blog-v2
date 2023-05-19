import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { PostItem } from "../../components/post-item";
import { HomeDataProps } from "../../shared";

const PostsPage: React.FC<PageProps<HomeDataProps>> = ({ data }) => {
  const { allMdx } = data;
  return (
    // Remove h1 and use h2
    <div className="container">
      <h1>All Posts</h1>
      {allMdx.nodes.map(
        ({
          id,
          frontmatter: {
            author,
            date,
            description,
            featuredImage,
            slug,
            title,
          },
        }) => (
          <React.Fragment key={id}>
            <hr />
            <PostItem
              author={author}
              date={date}
              description={description}
              slug={slug}
              title={title}
              featuredImage={featuredImage}
            />
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <title>All posts page</title>;

export const query = graphql`
  query {
    site {
      ...SiteInformation
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                width: 112
                height: 112
              )
            }
          }
        }
      }
    }
  }
`;
