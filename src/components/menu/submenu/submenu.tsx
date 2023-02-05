import * as React from "react";
import { uniqueId } from "lodash";
import { SubmenuContext } from "../context";
import { SUBMENU_INITIAL_STATE } from "../menu";
import { SubMenuList } from "./list";
import { SubMenuActionType, submenuReducer } from "./reducer";
import { ISubMenuProps } from "./submenu.interfaces";
import { SubMenuTrigger } from "./trigger";

const Submenu = ({ children }: ISubMenuProps) => {
  const id = React.useRef(uniqueId("-submenu--")).current;
  const buttonId = `button--${id}`;
  const listId = `list--${id}`;

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const menuItems = React.useRef(new Set<HTMLElement>()).current;
  const isRootMenu = !React.useContext(SubmenuContext);

  const [state, dispatch] = React.useReducer(
    submenuReducer,
    SUBMENU_INITIAL_STATE
  );

  const { isExpanded, currentIndex, previousIndex } = state;

  const first = React.useCallback(
    () => dispatch({ type: SubMenuActionType.Move, index: 0 }),
    []
  );

  const last = React.useCallback(
    () => dispatch({ type: SubMenuActionType.Move, index: menuItems.size - 1 }),
    [menuItems.size]
  );

  const open = React.useCallback(
    () => dispatch({ type: SubMenuActionType.Expand }),
    []
  );

  const close = React.useCallback(
    (focusButton = false) => {
      if (isExpanded) {
        focusButton && buttonRef.current?.focus();
        dispatch({ type: SubMenuActionType.Collapse });
      }
    },
    [isExpanded]
  );

  React.useEffect(() => {
    const items = Array.from(menuItems);

    if (currentIndex !== previousIndex) {
      const currentNode = items[Number(currentIndex)]
        ?.firstChild as HTMLElement;
      currentNode?.focus();
    }
  }, [menuItems, currentIndex, previousIndex]);

  React.useEffect(() => {
    const menuNode = listRef.current?.parentNode;

    menuNode?.addEventListener("mouseenter", () => open(), false);
    menuNode?.addEventListener("mouseleave", () => close(), false);

    return () => {
      menuNode?.removeEventListener("mouseenter", () => open(), false);
      menuNode?.removeEventListener("mouseleave", () => close(), false);
    };
  }, [isExpanded, close, open]);

  const value = React.useMemo(
    () => ({
      buttonId,
      buttonRef,
      listId,
      listRef,
      menuItems,
      currentIndex,
      isRootMenu,
      isExpanded,
      dispatch,
      close,
      open,
      first,
      last,
    }),
    [
      buttonId,
      buttonRef,
      listId,
      listRef,
      menuItems,
      currentIndex,
      isRootMenu,
      isExpanded,
      dispatch,
      close,
      open,
      first,
      last,
    ]
  );

  return (
    <SubmenuContext.Provider value={value}>{children}</SubmenuContext.Provider>
  );
};

Submenu.Trigger = SubMenuTrigger;
Submenu.List = SubMenuList;

export default Submenu;
