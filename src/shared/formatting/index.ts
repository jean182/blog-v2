import { IContactKeys } from "@shared/interfaces";
import supportedLanguages from "../../../i18n";

export const codeToLanguage = (code: string) =>
  supportedLanguages[code as keyof typeof supportedLanguages].replace(
    / /g,
    " " /* nbsp */
  );

export const formatPostsLink = (langKey: string) =>
  langKey === "en" ? "/posts" : `/${langKey}/posts`;

export const formatHomeLink = (langKey: string) =>
  langKey === "en" ? "/" : `/${langKey}`;

export const formatPostLink = (langKey: string, slug: string) =>
  formatPostsLink(langKey).concat(`/${slug}`);

export const filePathToSlug = (filePath: string) =>
  filePath.split("/")[1]?.replace("/", "");

export function formatContactKey(key: IContactKeys) {
  let name = "";
  switch (key) {
    case "github":
      name = "Github";
      break;
    case "linkedIn":
      name = "LinkedIn";
      break;
    default:
      name = "Stack Overflow";
  }
  return name;
}
