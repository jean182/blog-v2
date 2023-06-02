import { MenubarContext, SubmenuContext } from "@components/menu/context";
import * as React from "react";
import { SubMenuActionType } from "../reducer";
import { IList, IListProps } from "./list.interfaces";

const isLink = (node: HTMLElement) => node.tagName.toLowerCase() === "a";

export default function List({
  children,
  onClick,
  onKeyDown,
  ...props
}: IListProps) {
  const context = React.useContext(SubmenuContext);
  const menubarContext = React.useContext(MenubarContext);

  if (!context || !menubarContext) {
    throw new Error(
      "Submenu.List must be used within a Menubar & Submenu Context"
    );
  }

  const {
    buttonId,
    listId,
    listRef,
    menuItems,
    currentIndex,
    isRootMenu,
    isExpanded,
    dispatch,
    close,
    first,
    last,
  } = context;

  const { direction } = menubarContext;

  const previous = () => {
    const index =
      currentIndex === 0 ? menuItems.size - 1 : Number(currentIndex) - 1;
    dispatch({ type: SubMenuActionType.Move, index });
  };

  const next = () => {
    const index =
      currentIndex === menuItems.size - 1 ? 0 : Number(currentIndex) + 1;
    dispatch({ type: SubMenuActionType.Move, index });
  };

  const match: React.KeyboardEventHandler<HTMLDivElement> = (ev) => {
    const items = Array.from(menuItems);

    // Reorder the array, starting with the currentNode
    const reorderedItems = [
      ...items.slice(Number(currentIndex)),
      ...items.slice(0, Number(currentIndex)),
    ];

    // Find all nodes that begin with the pressed letter
    const matches = reorderedItems.filter((menuItem) => {
      const { textContent } = menuItem.firstChild as HTMLElement;
      const firstLetter = textContent?.toLowerCase().charAt(0);
      return ev.key === firstLetter;
    });

    // Exit early if there are no matches
    if (!matches.length) {
      return;
    }

    // If the focused item is a match, focus the next match.
    // Otherwise, focus the first match
    const currentNode = items[Number(currentIndex)];
    const nextMatch = matches.includes(currentNode) ? matches[1] : matches[0];
    const index = items.findIndex((item) => {
      return item === nextMatch;
    });

    dispatch({ type: SubMenuActionType.Move, index });
  };

  const keyDown: React.KeyboardEventHandler<HTMLDivElement> = (ev) => {
    switch (ev.code) {
      case "ArrowUp":
        ev.stopPropagation();
        ev.preventDefault();
        previous();
        break;
      case "ArrowDown":
        ev.stopPropagation();
        ev.preventDefault();
        next();
        break;
      case "ArrowLeft":
        ev.preventDefault();
        if (isRootMenu && direction === "horizontal") {
          close();
        } else {
          ev.stopPropagation();
          close(true);
        }
        break;
      case "ArrowRight":
        ev.preventDefault();
        close();
        break;
      case "Home":
        ev.stopPropagation();
        ev.preventDefault();
        first();
        break;
      case "End":
        ev.stopPropagation();
        ev.preventDefault();
        last();
        break;
      case "Enter":
      case "Space":
        if (isLink(ev.target as HTMLElement)) {
          close();
        }
        break;
      case "Escape":
        ev.stopPropagation();
        ev.preventDefault();
        close(true);
        break;
      case "Tab":
        close(true);
        break;
      default:
        ev.stopPropagation();
        match(ev);
        break;
    }
  };

  const listProps: IList = {
    ...props,
    id: listId,
    role: "menu",
    "aria-hidden": !isExpanded,
    "aria-labelledby": buttonId,
    "aria-orientation": "vertical",
    "data-menubar-submenu-list": "",
    onKeyDown: (ev) => {
      onKeyDown?.(ev);
      keyDown(ev);
    },
    onClick: (ev) => {
      onClick?.(ev);
      if (isLink(ev.target as HTMLElement)) {
        close();
      }
    },
  };

  return (
    <div hidden={!isExpanded} ref={listRef} style={{ opacity: !isExpanded ? "0" : "1", visibility: !isExpanded ? "hidden" : "visible" }} className="submenu" {...listProps}>
      {children}
    </div>
  );
}
