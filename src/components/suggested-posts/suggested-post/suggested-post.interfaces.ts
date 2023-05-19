import { AllPostsQuery } from "@shared";

export type ISuggestedPostProps =
  AllPostsQuery["allMdx"]["nodes"][0]["frontmatter"];
