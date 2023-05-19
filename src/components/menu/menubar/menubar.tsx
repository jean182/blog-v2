import { uniqueId } from "lodash";
import * as React from "react";
import { usePrevious } from "../../../shared";
import { MenubarContext } from "../context";
import { MenuItem } from "../menuitem";
import { Submenu } from "../submenu";
import { IMenuBar, IMenuBarProps } from "./menubar.interfaces";
import { StyledMenuBar } from "./menubar.styled";
import MoveUtils from "./menubar.utils";

function Menubar({
  ariaLabel,
  children,
  className,
  direction,
  onKeyDown,
  ...props
}: IMenuBarProps) {
  const id = React.useRef(uniqueId("menubar--")).current;
  const menuItems = React.useRef(new Set<HTMLDivElement | null>()).current;
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const previousIndex = usePrevious(currentIndex) ?? 0;
  const classes = className
    ? `menubar ${direction} ${className}`
    : `menubar ${direction}`;

  const first = () => setCurrentIndex(MoveUtils.first);

  const last = () => setCurrentIndex(MoveUtils.last(menuItems));

  const next = () => setCurrentIndex(MoveUtils.next(menuItems, currentIndex));

  const previous = () =>
    setCurrentIndex(MoveUtils.previous(menuItems, currentIndex));

  const match = (key: string) => {
    const index = MoveUtils.match(menuItems, currentIndex, key);
    if (index) {
      setCurrentIndex(index);
    }
  };

  const keyDown: React.KeyboardEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();
    const parentNode = ev.currentTarget?.parentNode as HTMLElement;

    if (direction === "vertical") {
      switch (ev.code) {
        case "ArrowUp":
          ev.preventDefault();
          previous();
          break;
        case "ArrowDown":
          ev.preventDefault();
          next();
          break;
        case "ArrowRight":
          ev.preventDefault();
          const isFromSubmenu =
            parentNode?.getAttribute("data-menubar-submenu-listitem") === "";

          if (isFromSubmenu) {
            next();
          }
          break;
        default:
          break;
      }
    }

    if (direction === "horizontal") {
      switch (ev.code) {
        case "ArrowLeft":
          ev.preventDefault();
          previous();
          break;
        case "ArrowRight":
          ev.preventDefault();
          next();
          break;
        case "Space":
          ev.preventDefault();
          (ev as any).target.click();
        default:
          break;
      }
    }

    switch (ev.code) {
      case "End":
        ev.preventDefault();
        last();
        break;
      case "Home":
        ev.preventDefault();
        first();
        break;
      default:
        match(ev.key);
        break;
    }
  };

  const listProps: IMenuBar = {
    ...props,
    id,
    role: "menubar",
    "aria-label": ariaLabel,
    "aria-orientation": direction,
    "data-menubar-list": "",
    onKeyDown: (ev) => {
      onKeyDown?.(ev);
      keyDown(ev as any);
    },
  };

  React.useEffect(() => {
    if (currentIndex !== previousIndex) {
      const items = Array.from(menuItems);
      const currentNode = items[currentIndex]?.firstChild as HTMLLIElement;
      const previousNode = items[previousIndex]?.firstChild as HTMLLIElement;

      // https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
      previousNode?.setAttribute("tabindex", "-1");
      currentNode?.setAttribute("tabindex", "0");
      currentNode?.focus();
    }
  }, [currentIndex, previousIndex, menuItems]);

  const value = React.useMemo(
    () => ({ menuItems, direction, menuRef }),
    [menuItems, direction, menuRef]
  );

  return (
    <MenubarContext.Provider value={value}>
      <StyledMenuBar ref={menuRef} className={classes} {...listProps}>
        {children}
      </StyledMenuBar>
    </MenubarContext.Provider>
  );
}

Menubar.MenuItem = MenuItem;
Menubar.Submenu = Submenu;
Menubar.Submenu.Trigger = Submenu.Trigger;
Menubar.Submenu.List = Submenu.List;

export default Menubar;
