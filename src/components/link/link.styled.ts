import { primaryButtonStyles, sharedButtonStyles } from "@assets/styles";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import type { StyledLinkProps } from "./link.interfaces";

const sharedAnchorStyles = css`
  :not(:disabled) {
    cursor: pointer;
  }
`;

const linkBtnStyles = css<StyledLinkProps>`
  :not(:disabled) {
    cursor: pointer;
  }

  ${sharedButtonStyles}
  ${(p) => p.primary && primaryButtonStyles}
`;

export const StyledAnchor = styled.a<StyledLinkProps>`
  ${(p) => p.asButton ? linkBtnStyles : sharedAnchorStyles}
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  ${(p) => p.asButton ? linkBtnStyles : sharedAnchorStyles}
`;
