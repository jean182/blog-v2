import * as React from "react";
import { ISubMenuActions } from "../submenu/reducer";

interface IMenuBarContext {
  menuItems: Set<HTMLDivElement | null>;
  direction?: React.AriaAttributes["aria-orientation"];
  menuRef: React.RefObject<HTMLDivElement>;
}

interface ISubMenuContext {
  buttonId: string;
  buttonRef: any;
  listId: string;
  listRef: React.RefObject<HTMLDivElement>;
  menuItems: Set<HTMLElement>;
  currentIndex: number | null;
  isRootMenu: boolean;
  isExpanded: boolean;
  dispatch: (value: ISubMenuActions) => void;
  close:  (focusButton?: boolean) => void;
  open: () => void;
  first: () => void;
  last: () => void;
}

export const MenubarContext = React.createContext<IMenuBarContext | null>(null);
export const SubmenuContext = React.createContext<ISubMenuContext | null>(null);
