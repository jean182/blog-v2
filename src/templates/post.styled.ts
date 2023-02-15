import styled from "styled-components";

export const StyledPost = styled.div`
  ${(p) => p.theme.breakpoints.up("md")} {
    font-size: 1.275rem;
    font-weight: 300;
    letter-spacing: 0.002em;
    line-height: 2.375rem;
  }
`;
