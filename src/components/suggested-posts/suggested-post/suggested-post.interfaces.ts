export interface ISuggestedPostProps extends Omit<Queries.Frontmatter, "slug"> {
  langKey: string;
  slug: string;
}
