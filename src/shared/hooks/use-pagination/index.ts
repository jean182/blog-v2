import React from "react";

type PageItemType =
  | "page"
  | "previous"
  | "next"
  | "start-ellipsis"
  | "end-ellipsis";
type PaginationBaseItem = number | "previous" | "next";
type IButtonPage = PaginationBaseItem | number | "first" | "last";

type PaginationItem = {
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  page: number | null;
  selected: boolean;
  type: PageItemType;
  "aria-current"?: "true";
};

type PaginationProps = {
  boundaryCount?: number;
  count?: number;
  defaultPage: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: HandlePaginationItemClick;
  page?: any;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  siblingCount?: number;
};

type HandlePaginationItemClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  value: number | null
) => void;

export default function usePagination(props: PaginationProps) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;

  const [page, setPageState] = React.useState<number | null>(defaultPage);

  const handleClick: HandlePaginationItemClick = (event, value) => {
    if (!pageProp) {
      setPageState(value as number);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      Number(page) - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      Number(page) + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ["first"] : []),
    ...(hidePrevButton ? [] : ["previous"]),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["end-ellipsis"]
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    ...(hideNextButton ? [] : ["next"]),
    ...(showLastButton ? ["last"] : []),
  ];

  // Map the button type to its page number
  const buttonPage = (type: IButtonPage) => {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return Number(page) - 1;
      case "next":
        return Number(page) + 1;
      case "last":
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map((item): PaginationItem => {
    if (typeof item === "number") {
      return {
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleClick(event, item);
        },
        type: "page",
        page: item,
        selected: item === page,
        disabled,
        ...(item === page && { "aria-current": "true" }),
      };
    }
    return {
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleClick(event, buttonPage(item as IButtonPage));
      },
      type: item as PageItemType,
      page: buttonPage(item as IButtonPage),
      selected: false,
      disabled:
        disabled ||
        (item.indexOf("ellipsis") === -1 &&
          (item === "next" || item === "last"
            ? Number(page) >= count
            : Number(page) <= 1)),
    };
  });

  return {
    items,
    ...other,
  };
}
