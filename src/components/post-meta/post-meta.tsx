import { DateUtils } from "@shared/formatting";
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
          <small className="reading-time">
            {DateUtils.minutesRead(minutesToRead, langKey)} {t("readingTime")}
          </small>
          <div className="divider">{"·"}</div>
          <small className="date">
            {date
              ? DateUtils.formatPostDate(date, langKey, t("postedAgo"))
              : "N/A"}
            {"."}
          </small>
        </div>
      </StyledMetaContent>
    </StyledPostMetaWrapper>
  );
}
