import { Link } from "gatsby";
import styled, { css } from "styled-components";  

const sharedAnchorStyles = css`
  :not(:disabled) {
    cursor: pointer;
  }
`;

export const StyledAnchor = styled.a`
  ${sharedAnchorStyles}
`;

export const StyledLink = styled(Link)`
  ${sharedAnchorStyles}
`;
