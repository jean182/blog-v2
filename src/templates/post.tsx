import { StyledPost } from "@assets/styles";
import { pre } from "@components/code";
import { GoToPost } from "@components/go-to-post";
import { HeadContainer } from "@components/head";
import { Link } from "@components/link";
import { PostMeta } from "@components/post-meta";
import { PostWrapper as wrapper } from "@components/post-wrapper";
import { TranslationsList } from "@components/translations-list";
import { VideoPlayer } from "@components/video-player";
import { MDXProvider } from "@mdx-js/react";
import { PostPageContext } from "@shared/interfaces";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";

const shortcodes = { pre, Link, VideoPlayer, wrapper }; // Provide common components here

export default function PostTemplate({
  data,
  children,
  pageContext,
}: PageProps<Queries.PostPageQuery, PostPageContext>) {
  const { next, previous, translations } = pageContext;
  const { avatar, mdx } = data;
  const {
    frontmatter,
    fields: { langKey, slug },
  } = mdx!;
  const { author, date, title } = frontmatter!;
  let avatarImg = getImage(avatar?.childImageSharp?.gatsbyImageData ?? null)!;
  return (
    <StyledPost>
      <h1>{title}</h1>
      <PostMeta
        alt={title ?? slug}
        author={author}
        avatar={avatarImg}
        date={date}
        langKey={langKey}
      />
      {translations.length > 0 && (
        <TranslationsList
          langKey={langKey}
          slug={slug}
          translations={translations}
        />
      )}
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <GoToPost next={next} previous={previous} />
    </StyledPost>
  );
}

export const Head: HeadFC<Queries.PostPageQuery, PostPageContext> = ({
  data,
  pageContext,
}) => {
  const { langKey } = pageContext;
  const { mdx } = data;
  const { frontmatter } = mdx!;
  const { title } = frontmatter!;
  return <HeadContainer lang={langKey} title={title ?? ""} />;
};

export const query = graphql`
  query PostPage($id: String!) {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FIXED
          width: 44
          height: 44
        )
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        langKey
        slug
      }
      frontmatter {
        author
        date
        title
      }
    }
    site {
      ...SiteInformation
    }
  }
`;
