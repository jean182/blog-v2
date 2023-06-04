import styled from "styled-components";

export const StyledNotFound = styled.div`
  ${(p) => p.theme.breakpoints.up("md")} {
    font-size: 1.275rem;
    font-weight: 300;
    letter-spacing: 0.002em;
    line-height: 2.375rem;
  }

  ${(p) => p.theme.breakpoints.down("md")} {
    margin-top: 0;
  }
`;
