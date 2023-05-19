import { Link } from "@components/link";
import * as React from "react";
import { MenuBar } from "./menubar";

export const SUBMENU_INITIAL_STATE = {
  isExpanded: false,
  currentIndex: null,
  previousIndex: null,
};

const MENUBAR = "header-menubar";

export default function Menu() {
  const link = React.useRef<HTMLDivElement>(null);
  return (
    <nav>
      <MenuBar data-testid={MENUBAR} direction="horizontal">
        <MenuBar.MenuItem>
          <Link to="/">
            <span>Home</span>
          </Link>
        </MenuBar.MenuItem>
        <MenuBar.MenuItem>
          <Link to="/about">
              <span>About</span>
            </Link>
        </MenuBar.MenuItem>
        <MenuBar.MenuItem ref={link}>
          <Link to="https://github.com/jean182" target="_blank">
            <span>Github</span>
          </Link>
        </MenuBar.MenuItem>
      </MenuBar>
    </nav>
  );
}
