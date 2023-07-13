import * as React from "react";
import { SuggestedPost } from "./suggested-post";
import { ISuggestedPostsProps } from "./suggested-posts.interfaces";
import { StyledSuggestedPosts } from "./suggested-posts.styled";
import { formatPostLink } from "@shared/formatting";

export default function SuggestedPosts({ nodes }: ISuggestedPostsProps) {
  return (
    <StyledSuggestedPosts>
      {nodes.map(({ fields: { langKey, slug: rawSlug }, frontmatter, id }) => {
        if (!frontmatter) return null;
        const { author, date, description, title, featuredImage } = frontmatter;
        const slug = formatPostLink(langKey, rawSlug)
        return (
          <SuggestedPost
            author={author ?? ""}
            date={date ?? ""}
            description={description ?? ""}
            slug={slug}
            title={title ?? ""}
            featuredImage={featuredImage as Queries.File}
            key={id}
          />
        );
      })}
    </StyledSuggestedPosts>
  );
}
