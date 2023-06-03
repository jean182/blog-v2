import {
  navActiveLinkStyles,
  navFocusedStyles,
  navHoverStyles,
} from "@assets/styles";
import styled, { css } from "styled-components";

const submenuStyles = css`
  .submenu {
    background-color: ${(p) => p.theme.semanticColors.menuBackground};
    z-index: ${(p) => p.theme.stack.values.dropdown};
    color: ${(p) => p.theme.semanticColors.actionLink};
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border: 1px solid white;
    margin-top: 0.2em;

    ${(p) => p.theme.breakpoints.up("md")} {
      position: absolute;
    }

    button {
      display: block;
      width: 100%;
      clear: both;
      font-weight: 400;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
    }
  }
`;

const sharedActionStyles = css`
  ${navFocusedStyles}

  ${navHoverStyles}

  color: ${(p) => p.theme.semanticColors.actionLink};
  padding: 0 8px;
  position: relative;
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
  cursor: pointer;

  display: block;
  line-height: 44px;
  height: 44px;
  overflow: hidden;
  text-align: center;
  text-decoration: none;

  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  user-select: none;

  span {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    ${(p) => p.theme.breakpoints.down("md")} {
      justify-content: start;
    }
  }
`;

const sharedAnchorStyles = css`
  a,
  button {
    ${sharedActionStyles}
  }

  a {
    ${navActiveLinkStyles}

    &:before {
      background-color: transparent;
      bottom: 0px;
      content: "";
      height: 2px;
      left: 8px;
      position: absolute;
      right: 8px;
      transition: left 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s,
        right 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s;
    }

    &:after {
      color: transparent;
      content: attr(data-content);
      display: block;
      font-weight: bold;
      height: 1px;
      overflow: hidden;
      visibility: hidden;
    }
  }
`;

export const StyledMenuItem = styled.div`
  :has(.submenu) {
    position: relative;
  }

  ${submenuStyles}

  ${sharedAnchorStyles}
`;
