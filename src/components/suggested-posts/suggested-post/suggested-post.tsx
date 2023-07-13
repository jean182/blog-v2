import { ISuggestedPostProps } from "@shared/interfaces";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { StyledSuggestedPost } from "./suggested-post.styled";

const PLACEHOLDER_URL = "../../../images/placeholder.jpg";

export default function SuggestedPost({
  author,
  date,
  featuredImage,
  slug,
  title,
}: ISuggestedPostProps) {
  let featuredImg = getImage(
    featuredImage?.childImageSharp?.gatsbyImageData ?? null
  );
  return (
    <article>
      <StyledSuggestedPost to={slug}>
        {featuredImg ? (
          <GatsbyImage alt={title ?? slug} image={featuredImg} />
        ) : (
          <StaticImage
            width={300}
            height={200}
            layout="constrained"
            alt={title ?? slug}
            src={PLACEHOLDER_URL}
          />
        )}
        <div className="text">
          <h2>{title}</h2>
          <p>
            <strong>{author}</strong>
          </p>
          <p>
            <small>{date ? new Date(date).toLocaleDateString() : "N/A"}</small>
          </p>
        </div>
      </StyledSuggestedPost>
    </article>
  );
}
