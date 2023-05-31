import { formatPostLink } from "@shared/formatting";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { IPostItemProps } from "./post-item.interfaces";
import { StyledPostItem } from "./post-item.styled";
import { useTranslations } from "@shared/hooks";

export default function PostItem({
  author,
  date,
  excerpt,
  featuredImage,
  langKey,
  minutesToRead,
  slug,
  title,
}: IPostItemProps) {
  const { t } = useTranslations("post");
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
            <small>
              {date ? new Date(date).toLocaleDateString(langKey) : "N/A"}
            </small>
          </p>
        </div>
        <div className="post-preview">
          <p>{excerpt}</p>
        </div>
        <div className="post-image">
          {featuredImg && (
            <GatsbyImage alt={title ?? slug} image={featuredImg} />
          )}
        </div>
        <div className="time">
          <p>{minutesToRead} {t("readingTime")}</p>
        </div>
      </StyledPostItem>
    </article>
  );
}
