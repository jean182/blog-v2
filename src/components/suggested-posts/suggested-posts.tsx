import * as React from "react";
import { SuggestedPost } from "./suggested-post";
import { ISuggestedPostsProps } from "./suggested-posts.interfaces";
import { StyledSuggestedPosts } from "./suggested-posts.styled";

export default function SuggestedPosts({ nodes }: ISuggestedPostsProps) {
  return (
    <StyledSuggestedPosts>
      {nodes.map(({ fields: { langKey, slug }, frontmatter, id }) => {
        if (!frontmatter) return null;
        const { author, date, description, title, featuredImage } = frontmatter;
        return (
          <SuggestedPost
            author={author ?? ""}
            date={date ?? ""}
            description={description ?? ""}
            langKey={langKey}
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
