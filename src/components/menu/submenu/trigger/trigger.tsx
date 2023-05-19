import * as React from "react";
import { MenubarContext, SubmenuContext } from "../../context";
import { ITrigger, ITriggerProps } from "./trigger.interfaces";

export default function Trigger({
  onClick,
  onFocus,
  onKeyDown,
  onMouseOver,
  ...props
}: ITriggerProps) {
  const context = React.useContext(SubmenuContext);
  const menubarContext = React.useContext(MenubarContext);

  if (!context || !menubarContext) {
    throw new Error(
      "Submenu.Trigger must be used within a Menubar & Submenu Context"
    );
  }

  const {
    buttonId,
    buttonRef,
    listId,
    isRootMenu,
    isExpanded,
    first,
    last,
    open,
    close,
  } = context;

  const { direction } = menubarContext;

  const keyDown: React.KeyboardEventHandler<HTMLButtonElement> = (ev) => {
    switch (ev.code) {
      case "Enter":
      case "Space":
        ev.stopPropagation();
        first();
        break;
      default:
        close();
        break;
    }

    if (direction === "horizontal" && isRootMenu) {
      switch (ev.code) {
        case "ArrowUp":
          ev.stopPropagation();
          last();
          break;
        case "ArrowDown":
          ev.stopPropagation();
          first();
          break;
        case "ArrowLeft":
        case "ArrowRight":
          close();
          break;
        default:
          break;
      }
    } else {
      switch (ev.code) {
        case "ArrowUp":
        case "ArrowDown":
          close();
          break;
        case "ArrowRight":
          ev.stopPropagation();
          first();
          break;
        case "ArrowLeft":
          isRootMenu ? last() : close();
          break;
        default:
          break;
      }
    }
  };

  const buttonProps: ITrigger = {
    ...props,
    id: buttonId,
    ref: buttonRef,
    type: "button",
    "aria-haspopup": true,
    "aria-expanded": isExpanded,
    "aria-controls": listId,
    "data-menubar-submenu-trigger": "",
    onClick: (ev) => {
      if (isExpanded) {
        close();
      } else {
        open();
      }
      onClick?.(ev);
      ev.stopPropagation();
    },
    onKeyDown: (ev) => {
      onKeyDown?.(ev);
      keyDown(ev);
    },
    onFocus: (ev) => {
      onFocus?.(ev);

      const targetMenu = ev.target?.parentNode?.parentNode;
      const relatedMenuItem = ev.relatedTarget?.parentNode as HTMLElement;
      const relatedMenu = relatedMenuItem?.parentNode;
      const isRelatedFromSubmenu =
        relatedMenuItem?.getAttribute("data-menubar-submenu-listitem") === "";

      if (isRelatedFromSubmenu && relatedMenu !== targetMenu) {
        open();
      }
    },
  };

  return <button {...buttonProps} className="dropdown-toggle" />;
}
