import * as React from "react";
import { Link } from "../link";
import { MenuBar } from "../menu/menubar";
import { IContactKeys, INavbarProps } from "./navbar.interfaces";

const MENUBAR = "header-menubar";
const DIRECTION = "horizontal";

const labels = {
  menu: "Navigation",
  internalGroup: "Internal Links",
  actionGroup: "Actions"
}

function formatContactKey(key: IContactKeys) {
  let name = "";
  switch (key) {
    case "github":
      name = "Github";
      break;
    case "instagram":
      name = "Instagram";
      break;
    case "linkedIn":
      name = "LinkedIn";
      break;
    default:
      name = "Stack Overflow";
  }
  return name;
}

export default function Navbar({ contact, title }: INavbarProps) {
  const link = React.useRef<HTMLDivElement>(null);
  return (
    <nav>
      <MenuBar
        data-testid={MENUBAR}
        direction={DIRECTION}
        ariaLabel={labels.menu}
      >
        <div role="group" className="nav-group" aria-label={labels.internalGroup}>
          <MenuBar.MenuItem>
            <Link to="/">
              <span>{title}</span>
            </Link>
          </MenuBar.MenuItem>
          <MenuBar.MenuItem ref={link}>
            <Link to="/about">
              <span>About</span>
            </Link>
          </MenuBar.MenuItem>
        </div>
        <div role="group" className="nav-group" aria-label={labels.actionGroup}>
          {Object.entries(contact).map(([key, value]) => (
            <MenuBar.MenuItem key={key}>
              <Link to={value} target="_blank">
                <span>{formatContactKey(key as IContactKeys)}</span>
              </Link>
            </MenuBar.MenuItem>
          ))}
        </div>
      </MenuBar>
    </nav>
  );
}
