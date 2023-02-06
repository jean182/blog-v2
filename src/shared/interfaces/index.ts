type ContactUrl = {
  github: string;
  instagram: string;
  linkedIn: string;
  stackOverflow: string;
};

type HomeFrontmatter = {
  author: string;
  slug: string;
  title: string;
  date: string;
  description: string;
};

type HomePostNode = {
  id: string;
  frontmatter: HomeFrontmatter;
};

type AllMdx = {
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
