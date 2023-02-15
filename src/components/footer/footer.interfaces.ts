import { HomeDataProps, IContactKeys } from "../../shared";

export interface IFooterProps {
  contact: HomeDataProps["site"]["siteMetadata"]["contact"];
}

export interface ContactToIcon {
  contactKey: IContactKeys;
}
