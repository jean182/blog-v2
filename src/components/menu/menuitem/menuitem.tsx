import * as React from "react";
import { MenubarContext, SubmenuContext } from "../context";
import { IMenuItemChildrenProps, IMenuItemProps } from "./menuitem.interfaces";
import { StyledMenuItem } from "./menuitem.styled";

const MenuItem = React.forwardRef<HTMLDivElement, IMenuItemProps>(
  ({ children, ...props }, ref) => {
    const menubarContext = React.useContext(MenubarContext);
    const submenuContext = React.useContext(SubmenuContext);

    if (!menubarContext) {
      throw new Error("MenuItem must be used within a Menubar Context");
    }

    const [isFirstChild, setIsFirstChild] = React.useState(false);
    const menuItemRef = (ref ??
      React.useRef(null)) as React.RefObject<HTMLDivElement>;
    const { menuItems } = menubarContext;

    const listItemProps = {
      ...props,
      ref: menuItemRef,
      role: "none",
      "data-menubar-listitem": !submenuContext ? "" : null,
      "data-menubar-submenu-listitem": submenuContext ? "" : null,
    };

    const childProps: IMenuItemChildrenProps = {
      role: "menuitem",
      tabIndex: !submenuContext && isFirstChild ? "0" : "-1",
      ...(submenuContext
        ? { "data-menubar-submenu-menuitem": "" }
        : { "data-menubar-menuitem": "" }),
    };

    React.useEffect(() => {
      const menuItemNode = menuItemRef.current;

      if (menuItemNode) {
        if (!menuItems.size) {
          setIsFirstChild(true);
        }

        menuItems.add(menuItemNode);
      }

      return () => {
        menuItems.delete(menuItemNode);
      };
    }, [menuItems]);

    return (
      <StyledMenuItem {...listItemProps}>
        {typeof children === "function"
          ? children(childProps)
          : React.cloneElement(children, childProps)}
      </StyledMenuItem>
    );
  }
);

export default MenuItem;
