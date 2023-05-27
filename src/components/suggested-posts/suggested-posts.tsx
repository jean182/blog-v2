import * as React from "react";
import { SuggestedPost } from "./suggested-post";
import { ISuggestedPostsProps } from "./suggested-posts.interfaces";
import { StyledSuggestedPosts } from "./suggested-posts.styled";

export default function SuggestedPosts({ nodes }: ISuggestedPostsProps) {
  return (
    <StyledSuggestedPosts>
      {nodes.map(
        ({
          fields: {
            langKey,
            slug,
          },
          frontmatter: {
            author,
            date,
            description,
            title,
            featuredImage,
          },
          id,
        }) => (
          <SuggestedPost
            author={author}
            date={date}
            description={description}
            langKey={langKey}
            slug={slug}
            title={title}
            featuredImage={featuredImage}
            key={id}
          />
        )
      )}
    </StyledSuggestedPosts>
  );
}
