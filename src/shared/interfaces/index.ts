type ContactUrl = {
  github: string;
  instagram: string;
  linkedIn: string;
  stackOverflow: string;
};

export type IndexData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      contact: ContactUrl;
    };
  };
};
