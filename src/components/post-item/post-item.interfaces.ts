import { AllPostsQuery } from "@shared";

type PostFrontmatter = AllPostsQuery["allMdx"]["nodes"][0]["frontmatter"];

export interface IPostItemProps extends PostFrontmatter {
  langKey: string;
}
