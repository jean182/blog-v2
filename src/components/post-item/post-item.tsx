import { formatPostLink } from "@shared/formatting";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { IPostItemProps } from "./post-item.interfaces";
import { StyledPostItem } from "./post-item.styled";

export default function PostItem({
  author,
  date,
  description,
  featuredImage,
  langKey,
  slug,
  title,
}: IPostItemProps) {
  const startUrl = langKey == "en" ? "/post" : `/${langKey}/post/`
  let featuredImg = getImage(
    featuredImage?.childImageSharp?.gatsbyImageData ?? null
  );
  return (
    <article>
      <StyledPostItem to={formatPostLink(langKey, slug)}>
        <div className="post-meta">
          <h2>{title}</h2>
          <p>
            <strong>{author}</strong>
          </p>
          <p>
            <small>{new Date(date).toLocaleDateString()}</small>
          </p>
        </div>
        <div className="post-preview">
          <p>{description}</p>
        </div>
        <div className="post-image">
          {featuredImg && <GatsbyImage alt={title} image={featuredImg} />}
        </div>
      </StyledPostItem>
    </article>
  );
}
