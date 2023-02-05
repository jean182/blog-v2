type IMenuItemData = {
  "data-menubar-listitem": string | null;
  "data-menubar-submenu-listitem": string | null;
};

export type IMenuItem = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IMenuItemData;

export interface IMenuItemChildrenProps {
  "data-menubar-menuitem"?: string;
  "data-menubar-submenu-listitem"?: string;
  role: React.AriaRole;
  tabIndex: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IMenuItemProps {
  children:
    | React.ReactElement
    | ((items?: IMenuItemChildrenProps) => React.ReactElement);
  ref?: React.RefObject<HTMLDivElement>;
}
