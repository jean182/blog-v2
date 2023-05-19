import { AllPostsQuery, IContactKeys } from "@shared";

export interface IFooterProps {
  contact: AllPostsQuery["site"]["siteMetadata"]["contact"];
}

export interface ContactToIcon {
  contactKey: IContactKeys;
}
