export type TransformLinkFn = (
  breadcrumbLinks: IBreadcrumbItem[],
  currentPath: string,
  index: number,
  initialArr: string[]
) => IBreadcrumbItem[];

export type IBreadcrumbProps = {
  isNotFoundPage?: boolean;
  pathname: string;
};

export type IBreadcrumbItem = {
  current: boolean;
  path: string;
  textToDisplay: string;
};
