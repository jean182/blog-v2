import { AllPostsQuery } from "@shared";

type IFrotnmatter = AllPostsQuery["allMdx"]["nodes"][0]["frontmatter"];

export interface ISuggestedPostProps extends IFrotnmatter {
  langKey: string;
}