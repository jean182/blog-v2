export interface IGoToLink {
  className?: string;
  node: Pick<Queries.Mdx, "id" | "frontmatter" | "fields" | "internal">;
  isNext?: boolean;
}

type GoToNode = Pick<
  Queries.Mdx,
  "id" | "frontmatter" | "fields" | "internal"
> | null;

export interface IGoToPost {
  next: GoToNode;
  previous: GoToNode;
}
