import type { GatsbyLinkProps } from "gatsby";
import * as React from "react";
import type { StyledLinkProps } from "./link.interfaces";
import { StyledAnchor, StyledLink } from "./link.styled";

const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

export default function Link<TState>({
  asButton,
  children,
  primary,
  to,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState> & StyledLinkProps>) {
  if (props.target === "_blank") {
    return (
      <StyledAnchor
        {...props}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        asButton={asButton}
        primary={primary}
      >
        {children}
      </StyledAnchor>
    );
  }

  if (isExternalLink(to)) {
    return (
      <StyledAnchor {...props} asButton={asButton} href={to} primary={primary}>
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledLink
      {...props}
      asButton={asButton}
      to={to}
      activeClassName="active"
      primary={primary}
    >
      {children}
    </StyledLink>
  );
}
