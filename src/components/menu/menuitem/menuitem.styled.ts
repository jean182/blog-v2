import styled, { css } from "styled-components";

const focusedStyles = css`
  :focus {
    outline: 1px solid ${(p) => p.theme.semanticColors.focusBorder};

    ::after {
      content: attr(data-content);
      position: relative;
      border: 0;
    }
  }
`;

const hoverStyles = css`
  :hover {
    color: ${(p) => p.theme.semanticColors.buttonTextHovered};
    background-color: ${(p) => p.theme.semanticColors.buttonBackgroundHovered};
  }
`;

const activeStyles = css`
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

const sharedAnchorStyles = css`
  a {
    ${focusedStyles}

    ${activeStyles}

    ${hoverStyles}

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

    color: ${(p) => p.theme.semanticColors.actionLink};
    padding: 0 8px;
    position: relative;
    background-color: transparent;
    border: 0px;
    border-radius: 0px;
    cursor: pointer;

    display: inline-block;
    line-height: 44px;
    height: 44px;
    margin-right: 8px;
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
    }
  }
`;

export const StyledMenuItem = styled.div`
  display: inherit;
  flex-shrink: 0;

  ${sharedAnchorStyles}
`;
