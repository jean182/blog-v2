import { useTranslations } from "@shared/hooks";
import * as React from "react";
import { PaginationWrapperStyled } from "./pagination-wrapper.styled";
import { Pagination } from "@components/pagination";

type PaginationWrapperProps = {
  currentPage: number;
  numItems: number;
  numPages: number;
  postsPerPage: number;
};

export default function PaginationWrapper({
  currentPage,
  numItems,
  numPages,
  postsPerPage,
}: PaginationWrapperProps) {
  const { t } = useTranslations("posts");
  const firstItem = postsPerPage * currentPage - 3;
  const lastItem =
    currentPage !== numPages ? postsPerPage * currentPage : numItems;
  const translationArgs = [firstItem, lastItem, numItems];

  return (
    <PaginationWrapperStyled>
      <div>
        <p>{t("postsCount", translationArgs)}</p>
      </div>
      {numPages > 1 && (
        <Pagination count={numPages} defaultPage={currentPage} />
      )}
    </PaginationWrapperStyled>
  );
}
