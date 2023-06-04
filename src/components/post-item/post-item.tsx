import { DateUtils, formatPostLink } from "@shared/formatting";
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
    <React.Fragment>
      <hr />
      <article>
        <StyledPostItem to={formatPostLink(langKey, slug)}>
          <div className="post-meta">
            <h2>{title}</h2>
            <p>
              <strong>{author}</strong>
            </p>
            <p>
              <small>
                {date
                  ? DateUtils.formatPostDate(date, langKey, t("postedAgo"))
                  : "N/A"}
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
          {typeof minutesToRead === "number" && (
            <div className="time">
              <small>
                {DateUtils.minutesRead(minutesToRead, langKey)}{" "}
                {t("readingTime")}
              </small>
            </div>
          )}
        </StyledPostItem>
      </article>
    </React.Fragment>
  );
}
