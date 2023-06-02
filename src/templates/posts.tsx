import { HeadContainer } from "@components/head";
import { PostItem } from "@components/post-item";
import { animated, config, useTrail, useTransition } from "@react-spring/web";
import { useTranslations } from "@shared/hooks";
import { PostsPageContext } from "@shared/interfaces";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

const PostsPage: React.FC<PageProps<Queries.PostsPageQuery>> = ({ data }) => {
  const { allMdx } = data;
  const { lang, t } = useTranslations("posts");
  const trails = useTrail(allMdx.nodes.length, {
    xy: [0, 0],
    opacity: 1,
    from: { xy: [30, 50], opacity: 0 },
    config: config.gentle,
    delay: 100,
  });

  return (
    // Remove h1 and use h2
    <>
      <h1>{t("all")}</h1>
      {trails.map((styles, index) => {
        const {
          excerpt,
          id,
          fields: { slug, timeToRead },
          frontmatter,
        } = allMdx.nodes[index];
        if (!frontmatter) return null;
        const { author, date, featuredImage, title } = frontmatter;
        return (
          <animated.div key={id} style={styles}>
            <PostItem
              author={author}
              date={date}
              excerpt={excerpt}
              langKey={lang}
              minutesToRead={Math.round(timeToRead?.minutes ?? 0)}
              slug={slug}
              title={title}
              featuredImage={featuredImage as Queries.File}
            />
          </animated.div>
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
