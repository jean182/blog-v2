import { IBreadcrumbItem, TransformLinkFn } from "./breadcrumb.interfaces";

export const ROOT_URL = "/";

export const transformLinks: (textToDisplayRoot?: string) => TransformLinkFn =
  (textToDisplayRoot) => (breadcrumbLinks, currentPath, index, initialArr) => {
    const isFirst = index === 0;
    const last = breadcrumbLinks[breadcrumbLinks.length - 1];
    const lastUsedLink = last?.path ?? ROOT_URL;
    const breadcrumbLink: IBreadcrumbItem = {
      current: initialArr.length - 1 === index,
      path: isFirst ? ROOT_URL : lastUsedLink.concat(currentPath, ROOT_URL),
      textToDisplay: isFirst ? textToDisplayRoot ?? "home" : currentPath,
    };
    return [...breadcrumbLinks, breadcrumbLink];
  };
