import { GatsbyLinkProps } from "gatsby";

export interface ILinkProps<TState> extends GatsbyLinkProps<TState> {
  children: React.ReactElement;
}
