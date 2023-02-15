import { ImageDataLike } from "gatsby-plugin-image";

type ContactUrl = {
  github: string;
  instagram: string;
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

type HomePostNode = {
  id: string;
  frontmatter: HomeFrontmatter;
};

export type AllMdx = {
  nodes: HomePostNode[];
};

export type HomeDataProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      contact: ContactUrl;
    };
  };
  allMdx: AllMdx;
};
