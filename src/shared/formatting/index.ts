import { IContactKeys } from "@shared/interfaces";
import supportedLanguages from "../../../i18n";

export { DateUtils } from "./date";

export const translationArgsRegex = /\{[0-9]+\}/;

/**
 * @description Formats a language code to a language name
 * @param code - The language code to format
 * @returns The formatted language name
 * */
export const codeToLanguage = (code: string) =>
  supportedLanguages[code as keyof typeof supportedLanguages].replace(
    / /g,
    " " /* nbsp */
  );

/**
 * @description formats a link to the posts page
 * @param langKey - The language key to use
 * @returns The formatted link to the posts page
 * */
export const formatPostsLink = (langKey: string) =>
  langKey === "en" ? "/posts" : `/${langKey}/posts`;

/**
 * @description formats a link to the home page
 * @param langKey - The language key to use
 * @returns The formatted link to the home page
 * */
export const formatHomeLink = (langKey: string) =>
  langKey === "en" ? "/" : `/${langKey}`;

/**
 * @description formats a link to a post
 * @param langKey - The language key to use
 * @param slug - The slug of the post
 * @returns The formatted link to the post
 * */
export const formatPostLink = (langKey: string, slug: string) =>
  formatPostsLink(langKey).concat(`/${slug}`);

/**
 * @description Uses the file path to get the slug of the post
 * @param filePath - The file path to use
 * @returns The slug of the post
 * */
export const filePathToSlug = (filePath: string) =>
  filePath.split("/")[1]?.replace("/", "");

/**
 * @description Formats a contact key to a contact name
 * @param key - The contact key to format
 * @returns The formatted contact name
 * */
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
