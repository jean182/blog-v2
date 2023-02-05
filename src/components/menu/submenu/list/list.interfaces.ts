type IListData = { "data-menubar-submenu-list": string };

export type IList = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IListData;

export interface IListProps {
  children: React.ReactElement | React.ReactElement[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}
