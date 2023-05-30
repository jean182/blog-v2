import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IPostMetaProps {
  alt: string;
  author: string | null;
  avatar: IGatsbyImageData;
  date: string | null;
  langKey: string;
}