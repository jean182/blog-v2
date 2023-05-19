import { AllPostsQuery } from "@shared";

export type IPostItemProps = AllPostsQuery["allMdx"]["nodes"][0]["frontmatter"]
