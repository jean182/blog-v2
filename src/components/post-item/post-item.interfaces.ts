export interface IPostItemProps
  extends Omit<Queries.Frontmatter, "slug" | "description"> {
  excerpt: string | null;
  langKey: string;
  slug: string;
}
