export type TransformLinkFn = (
  breadcrumbLinks: IBreadcrumbItem[],
  currentPath: string,
  index: number,
  initialArr: string[]
) => IBreadcrumbItem[];

export type IBreadcrumbProps = {
  pathname: string;
};

export type IBreadcrumbItem = {
  current: boolean;
  path: string;
  textToDisplay: string;
};
