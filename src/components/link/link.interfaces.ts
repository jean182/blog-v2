import type { GatsbyLinkProps } from "gatsby";

export type StyledLinkProps = {
  asButton?: boolean;
  primary?: boolean;
};

export interface ILinkProps<TState> extends GatsbyLinkProps<TState> {
  children: React.ReactElement;
};
