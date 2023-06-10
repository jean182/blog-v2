import { usePagination, useTranslations } from "@shared/hooks";
import { navigate } from "gatsby";
import * as React from "react";
import { StyledPagination } from "./pagination.styled";

type PaginationProps = {
  count: number;
  defaultPage: number;
};

export default function Pagination({ count, defaultPage }: PaginationProps) {
  const { t } = useTranslations("posts");

  const onChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: number | null
  ) => void = (_event, value) => {
    navigate(value === 1 ? "/posts" : `?page=${value}`);
  };
  const { items } = usePagination({
    count,
    onChange,
    defaultPage,
  });

  return (
    <StyledPagination>
      <ul>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {t(type)}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </StyledPagination>
  );
}
