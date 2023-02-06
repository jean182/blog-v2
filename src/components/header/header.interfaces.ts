import { HomeDataProps } from "../../shared";

export interface IHeaderProps {
  title: string;
  contact: HomeDataProps["site"]["siteMetadata"]["contact"];
}
