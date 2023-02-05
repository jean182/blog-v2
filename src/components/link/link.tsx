import * as React from "react";
import type { GatsbyLinkProps } from "gatsby";
import { StyledAnchor, StyledLink } from "./link.styled";

const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

export default function Link<TState>({
  children,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>>) {
  if (props.target === "_blank") {
    return (
      <StyledAnchor
        {...props}
        href={props.to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </StyledAnchor>
    );
  }

  if (isExternalLink(props.to)) {
    return (
      <StyledAnchor {...props} href={props.to}>
        {children}
      </StyledAnchor>
    );
  }

  return <StyledLink {...props} activeClassName="active">{children}</StyledLink>;
}
