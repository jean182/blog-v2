import { css } from "styled-components";

export const navFocusedStyles = css`
  :focus,
  :focus-visible,
  :focus-within {
    outline: 1px solid ${(p) => p.theme.semanticColors.focusBorder};

    ::after {
      content: attr(data-content);
      position: relative;
      border: 0;
    }
  }
`;

export const navHoverStyles = css`
  :hover {
    color: ${(p) => p.theme.semanticColors.buttonTextHovered};
    background-color: ${(p) => p.theme.semanticColors.buttonBackgroundHovered};
  }
`;

export const navActiveLinkStyles = css`
  &.active {
    font-weight: 600;
    border: 0px;
    border-radius: 0px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0px 8px;
    color: ${(p) => p.theme.semanticColors.buttonTextHovered};

    &:before {
      background-color: ${(p) => p.theme.semanticColors.inputBackgroundChecked};
    }

    &:hover::before {
      left: 0;
      right: 0;
    }
  }
`;
