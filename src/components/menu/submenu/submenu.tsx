import { SUBMENU_INITIAL_STATE, SubmenuContext } from "@components/menu";
import { CustomizedMouseEvent } from "@shared/interfaces";
import { domUtils } from "@shared/utils";
import { uniqueId } from "lodash";
import * as React from "react";
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
      console.log("close");
      if (isExpanded) {
        console.log("close if");
        focusButton && buttonRef.current?.focus();
        dispatch({ type: SubMenuActionType.Collapse });
      }
    },
    [isExpanded]
  );

  React.useEffect(() => {
    const listener: (event: CustomizedMouseEvent) => void = (event) => {
      const elements = [buttonRef, listRef]
        .map((ref) => ref?.current)
        .filter(Boolean) as Node[];
      const isTargetCallback = domUtils.hasEventTarget(event.target as Node);
      if (elements.some(isTargetCallback)) {
        return;
      }

      close();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [buttonRef, listRef, close]);

  React.useEffect(() => {
    const items = Array.from(menuItems);

    if (currentIndex !== previousIndex) {
      const currentNode = items[Number(currentIndex)]
        ?.firstChild as HTMLElement;
      currentNode?.focus();
    }
  }, [menuItems, currentIndex, previousIndex]);

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
