import * as React from "react";
import { formatContactKey, IContactKeys, KeyboardUtils } from "../../shared";
import Hamburger from "../hamburger/hamburger";
import { Link } from "../link";
import { MenuBar } from "../menu/menubar";
import { INavbarProps } from "./navbar.interfaces";
import { StyledNavbar } from "./navbar.styled";

const MENUBAR = "header-menubar";

const labels = {
  menu: "Navigation",
  internalGroup: "Internal Links",
  actionGroup: "Actions",
};

export default function Navbar({ contact }: INavbarProps) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const link = React.useRef<HTMLDivElement>(null);
  const collapsedClass = open ? "collapse show" : "collapse";

  const onToggleClick = () => {
    setOpen(!open);
  };

  const onKeyPress: React.KeyboardEventHandler<HTMLAnchorElement> = (ev) => {
    if (KeyboardUtils.isActionKeyPressed(ev)) {
      ev.preventDefault();
      ev.currentTarget.click();
      if (ev.currentTarget.target !== "_blank") {
        setOpen(false);
      }
    }

    if (KeyboardUtils.isEscapePressed(ev)) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  };

  return (
    <StyledNavbar className="fixed">
      <button
        type="button"
        className="toggle"
        ref={toggleRef}
        aria-expanded={open}
        onClick={onToggleClick}
        aria-label={open ? "Close" : "Open"}
      >
        <Hamburger />
      </button>
      <MenuBar
        data-testid={MENUBAR}
        direction={open ? "vertical" : "horizontal"}
        ariaLabel={labels.menu}
        className={collapsedClass}
      >
        <div
          role="group"
          className="nav-group"
          aria-label={labels.internalGroup}
        >
          <MenuBar.MenuItem>
            <Link onKeyDown={onKeyPress} to="/">
              <span>Home</span>
            </Link>
          </MenuBar.MenuItem>
          <MenuBar.MenuItem>
            <Link onKeyDown={onKeyPress} to="/posts">
              <span>Posts</span>
            </Link>
          </MenuBar.MenuItem>
          <MenuBar.MenuItem ref={link}>
            <Link onKeyDown={onKeyPress} to="/about">
              <span>About</span>
            </Link>
          </MenuBar.MenuItem>
        </div>
        <div role="group" className="nav-group" aria-label={labels.actionGroup}>
          {Object.entries(contact).map(([key, value]) => (
            <MenuBar.MenuItem key={key}>
              <Link onKeyDown={onKeyPress} to={value} target="_blank">
                <span>{formatContactKey(key as IContactKeys)}</span>
              </Link>
            </MenuBar.MenuItem>
          ))}
        </div>
      </MenuBar>
    </StyledNavbar>
  );
}
