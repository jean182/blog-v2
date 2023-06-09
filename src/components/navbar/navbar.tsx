import { Hamburger } from "@components/hamburger";
import { Link } from "@components/link";
import { MenuBar } from "@components/menu/menubar";
import { ThemeValue } from "@context";
import { CgEditContrast } from "@react-icons/all-files/cg/CgEditContrast";
import { CgMoon } from "@react-icons/all-files/cg/CgMoon";
import { CgSun } from "@react-icons/all-files/cg/CgSun";
import { IContactKeys, KeyboardUtils, formatContactKey } from "@shared";
import { useOutsideClick, useTheme, useTranslations } from "@shared/hooks";
import * as React from "react";
import { INavbarProps } from "./navbar.interfaces";
import { StyledNavbar } from "./navbar.styled";

const MENUBAR = "header-menubar";

const labels = {
  menu: "Navigation",
  internalGroup: "Internal Links",
  actionGroup: "Actions",
};

const RenderThemeIcon = ({ theme }: { theme: ThemeValue }) => {
  const ariaLabel = `Current theme is ${theme}`;
  switch (theme) {
    case "contrast":
      return <CgEditContrast aria-label={ariaLabel} />;
    case "dark":
      return <CgMoon aria-label={ariaLabel} />;
    default:
      return <CgSun aria-label={ariaLabel} />;
  }
};

export default function Navbar({ navRef, contact }: INavbarProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslations("navLinks");
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  const link = React.useRef<HTMLDivElement>(null);
  const collapsedClass = open ? "collapse show" : "collapse";

  const onToggleClick = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  useOutsideClick(navRef, close);

  const onThemeChange = (theme: ThemeValue) => () => {
    setTheme(theme);
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

  const onLinkClick = () => {
    if (open) setOpen(false);
  };

  return (
    <StyledNavbar className="fixed" ref={navRef}>
      <div className="container-fluid">
        <Hamburger
          type="button"
          className="toggle"
          ref={toggleRef}
          aria-expanded={open}
          open={open}
          onClick={onToggleClick}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        />
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
              <Link onClick={onLinkClick} onKeyDown={onKeyPress} to="/">
                <span>{t("home")}</span>
              </Link>
            </MenuBar.MenuItem>
            <MenuBar.MenuItem>
              <Link onClick={onLinkClick} onKeyDown={onKeyPress} to="/posts">
                <span>{t("posts")}</span>
              </Link>
            </MenuBar.MenuItem>
            <MenuBar.MenuItem ref={link}>
              <Link onClick={onLinkClick} onKeyDown={onKeyPress} to="/about">
                <span>{t("about")}</span>
              </Link>
            </MenuBar.MenuItem>
          </div>
          <div
            role="group"
            className="nav-group"
            aria-label={labels.actionGroup}
          >
            {contact &&
              Object.entries(contact).map(([key, value]) => (
                <MenuBar.MenuItem key={key}>
                  <Link onKeyDown={onKeyPress} to={value ?? ""} target="_blank">
                    <span>{formatContactKey(key as IContactKeys)}</span>
                  </Link>
                </MenuBar.MenuItem>
              ))}
            <MenuBar.MenuItem>
              {(menuItemProps) => (
                <MenuBar.Submenu>
                  <MenuBar.Submenu.Trigger {...menuItemProps}>
                    <RenderThemeIcon theme={theme} />
                  </MenuBar.Submenu.Trigger>
                  <MenuBar.Submenu.List>
                    <MenuBar.MenuItem>
                      <button
                        type="button"
                        aria-label="Light"
                        onClick={onThemeChange("light")}
                      >
                        <CgSun />
                      </button>
                    </MenuBar.MenuItem>

                    <MenuBar.MenuItem>
                      <button
                        type="button"
                        aria-label="Dark"
                        onClick={onThemeChange("dark")}
                      >
                        <CgMoon />
                      </button>
                    </MenuBar.MenuItem>

                    <MenuBar.MenuItem>
                      <button
                        type="button"
                        aria-label="Contrast"
                        onClick={onThemeChange("contrast")}
                      >
                        <CgEditContrast />
                      </button>
                    </MenuBar.MenuItem>
                  </MenuBar.Submenu.List>
                </MenuBar.Submenu>
              )}
            </MenuBar.MenuItem>
          </div>
        </MenuBar>
      </div>
    </StyledNavbar>
  );
}
