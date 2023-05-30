import { useTranslations } from "@shared/hooks";
import React from "react";
import { IBreadcrumbItem, IBreadcrumbProps } from "./breadcrumb.interfaces";
import { BreadcrumbItem, BreadcrumbStyled, History } from "./breadcrumb.styled";
import { ROOT_URL, transformLinks } from "./breadcrumb.utils";

export default function Breadcrumb({ pathname }: IBreadcrumbProps) {
  const { t } = useTranslations("breadcrumb");
  const home = [ROOT_URL];
  const path = home.concat(pathname.split(ROOT_URL).filter(Boolean));
  const homeTextToDisplay = t("root");
  const transformLinksReduceFn = transformLinks(homeTextToDisplay);
  const breadcrumbLinks = React.useMemo(
    () => path.reduce<IBreadcrumbItem[]>(transformLinksReduceFn, []),
    [pathname, homeTextToDisplay]
  );

  return (
    <>
      {breadcrumbLinks.length > 1 && (
        <BreadcrumbStyled aria-label="Breadcrumb">
          <ol>
            {breadcrumbLinks.map(({ current, path, textToDisplay }) => (
              <BreadcrumbItem key={textToDisplay}>
                <History
                  to={path}
                  {...(current && { ["aria-current"]: "page" })}
                >
                  {textToDisplay}
                </History>
              </BreadcrumbItem>
            ))}
          </ol>
        </BreadcrumbStyled>
      )}
    </>
  );
}
