import React from "react";

type ContactUrl = {
  github: string;
  linkedIn: string;
  stackOverflow: string;
};

export type IContactKeys = keyof ContactUrl;

export type CreatePagesResult = {
  errors?: any;
  data?: {
    allMdx: Queries.MdxConnection;
  };
};

export type PostsPageContext = {
  langKey: string;
};

export type PostPageContext = {
  langKey: string;
  next: Queries.Mdx | null;
  notFoundPage?: boolean;
  previous: Queries.Mdx | null;
  translations: string[];
};

export interface ISuggestedPostProps extends Omit<Queries.Frontmatter, "slug"> {
  slug: string;
}

export type INavigationProps = {
  navRef: React.RefObject<HTMLDivElement>;
  contact: Queries.Maybe<Queries.SiteSiteMetadataContact>;
};

export type CustomizedMouseEvent<T = HTMLElement> =
  | MouseEvent
  | React.MouseEvent<T, MouseEvent>
  | TouchEvent
  | React.TouchEvent<T>;
