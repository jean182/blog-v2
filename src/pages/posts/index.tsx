import { PostItem } from "@components/post-item";
import { AllPostsQuery } from "@shared";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

const PostsPage: React.FC<PageProps<AllPostsQuery>> = ({ data }) => {
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
