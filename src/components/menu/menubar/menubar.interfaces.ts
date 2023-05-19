export interface IMenuBarProps {
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  direction?: React.AriaAttributes["aria-orientation"];
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface IMenuBar extends Omit<IMenuBarProps, "children"> {
  "aria-label"?: string;
  "aria-orientation"?: React.AriaAttributes["aria-orientation"];
  "data-menubar-list": string;
  id: string;
  role: React.AriaRole;
}
