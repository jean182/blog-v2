import * as React from "react";
import { Link } from "../link";
import { IPostPreviewProps } from "./post-preview.interfaces";
import { StyledPostPreview } from "./post-preview.styled";

export default function PostPreview({
  author,
  date,
  description,
  slug,
  title,
}: IPostPreviewProps) {
  return (
    <StyledPostPreview>
      <div className="post-meta">
        <h2><Link to={`/post/${slug}`}>{title}</Link></h2>
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
    </StyledPostPreview>
  );
}
