import { useTranslations } from "@shared/hooks";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { IPostMetaProps } from "./post-meta.interfaces";
import {
    StyledMetaContent,
    StyledPostMetaImageContainer,
    StyledPostMetaWrapper,
} from "./post-meta.styled";

export default function PostMeta({
  alt,
  author,
  avatar,
  date,
  langKey,
  minutesToRead,
}: IPostMetaProps) {
  const { t } = useTranslations("post");
  return (
    <StyledPostMetaWrapper>
      <StyledPostMetaImageContainer>
        <GatsbyImage alt={alt} image={avatar} />
      </StyledPostMetaImageContainer>
      <StyledMetaContent>
        <div className="author">
          <div>{author}</div>
        </div>
        <div className="meta">
          <div className="reading-time">
            {minutesToRead}{" "}{t("readingTime")}
          </div>
          <div className="divider">
            {"·"}
          </div>
          <div className="date">
            {t("publishedAt")?.concat(" ")}
            {date
              ? new Date(date).toLocaleDateString(langKey, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "N/A"}
            {"."}
          </div>
        </div>
      </StyledMetaContent>
    </StyledPostMetaWrapper>
  );
}
