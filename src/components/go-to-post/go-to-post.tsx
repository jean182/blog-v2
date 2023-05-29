import * as React from "react";
import { IGoToLink, IGoToPost } from "./go-to-post.interfaces";
import { Link } from "@components/link";
import { formatPostLink } from "@shared/formatting";
import { StyledGoToPost } from "./go-to-post.styled";

function GoToLink({
  node: {
    fields: { langKey, slug },
    frontmatter,
  },
}: IGoToLink) {
  const { title } = frontmatter ?? {};
  return <Link to={formatPostLink(langKey, slug)}>{title}</Link>;
}

export default function GoToPost({ next, previous }: IGoToPost) {
  return (
    <StyledGoToPost>
      <ul>
        {previous && (
          <li className="previous">
            <GoToLink node={previous} />
          </li>
        )}
        {next && (
          <li className="next">
            <GoToLink node={next} isNext />
          </li>
        )}
      </ul>
    </StyledGoToPost>
  );
}
