import { HeadContainer } from "@components/head";
import { PostItem } from "@components/post-item";
import { useTranslations } from "@shared/hooks";
import { PostsPageContext } from "@shared/interfaces";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

const PostsPage: React.FC<PageProps<Queries.PostsPageQuery>> = ({ data }) => {
  const { allMdx } = data;
  const { lang, t } = useTranslations("posts");
  return (
    // Remove h1 and use h2
    <>
      <h1>{t("all")}</h1>
      {allMdx.nodes.map(({ excerpt, id, fields: { slug }, frontmatter }) => {
        if (!frontmatter) return null;
        const { author, date, featuredImage, title } = frontmatter;

        return (
          <React.Fragment key={id}>
            <hr />
            <PostItem
              author={author}
              date={date}
              excerpt={excerpt}
              langKey={lang}
              slug={slug}
              title={title}
              featuredImage={featuredImage as Queries.File}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default PostsPage;

export const Head: HeadFC<Queries.PostsPageQuery, PostsPageContext> = ({
  pageContext: { langKey },
}) => {
  return <HeadContainer lang={langKey} title=" All Posts" />;
};

export const query = graphql`
  query PostsPage($langKey: String!) {
    site {
      ...SiteInformation
    }
    allMdx(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        id
        internal {
          contentFilePath
        }
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
