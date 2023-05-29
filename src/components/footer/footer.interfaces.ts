import { IContactKeys } from "@shared";

export interface IFooterProps {
  contact: Queries.Maybe<Queries.SiteSiteMetadataContact>;
}

export interface ContactToIcon {
  contactKey: IContactKeys;
}
