import { HeadContainer } from "@components/head";
import { PaginationWrapper } from "@components/pagination-wrapper";
import { PostItem } from "@components/post-item";
import { useTranslations } from "@shared/hooks";
import { PostsPageContext } from "@shared/interfaces";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

function paginate(
  array: Queries.PostsPageQuery["allMdx"]["nodes"],
  perPage: number,
  pageNumber: number
) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * perPage, pageNumber * perPage);
}

const PostsPage: React.FC<PageProps<Queries.PostsPageQuery>> = ({
  data,
  location,
}) => {
  const { allMdx } = data;
  const { nodes } = allMdx;
  const { lang, t } = useTranslations("posts");
  const params = new URLSearchParams(location.search);
  const page = params.get("page");
  const currentPage = page ? Number(page) : 1;
  const postsPerPage = 6;
  const numPages = Math.ceil(nodes.length / postsPerPage);

  return (
    // Remove h1 and use h2
    <>
      <h1>{t("all")}</h1>
      {paginate(nodes, postsPerPage, currentPage).map((node) => {
        const {
          excerpt,
          id,
          fields: { slug, timeToRead },
          frontmatter,
        } = node;
        if (!frontmatter) return null;
        const { author, date, featuredImage, title } = frontmatter;
        return (
          <PostItem
            author={author}
            key={id}
            date={date}
            excerpt={excerpt}
            langKey={lang}
            minutesToRead={Math.round(timeToRead?.minutes ?? 0)}
            slug={slug}
            title={title}
            featuredImage={featuredImage as Queries.File}
          />
        );
      })}
      <PaginationWrapper
        currentPage={currentPage}
        numItems={nodes.length}
        numPages={numPages}
        postsPerPage={postsPerPage}
      />
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
          timeToRead {
            minutes
            text
            time
            words
          }
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
