import { ImageDataLike } from "gatsby-plugin-image";

type ContactUrl = {
  github: string;
  linkedIn: string;
  stackOverflow: string;
};

export type IContactKeys = keyof ContactUrl;

type HomeFrontmatter = {
  author: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  featuredImage?: {
    childImageSharp: {
      gatsbyImageData: ImageDataLike;
    };
  };
};

type PostsQuery = {
  id: string;
  frontmatter: HomeFrontmatter;
  fields: {
    langKey: string;
    slug: string;
  }
  internal: {
    contentFilePath: string;
  }
};

export type AllMdx = {
  nodes: PostsQuery[];
};

export type AllPostsQuery = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      contact?: ContactUrl;
    };
  };
  allMdx: AllMdx;
};

export type CreatePagesResult = {
  errors?: any;
  data?: {
    allMdx: Queries.MdxConnection;
  };
};

export type CustomizedMouseEvent<T = HTMLElement> =
  | MouseEvent
  | React.MouseEvent<T, MouseEvent>
  | TouchEvent
  | React.TouchEvent<T>;
