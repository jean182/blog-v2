import styled from "styled-components";

export const PaginationWrapperStyled = styled.div`
  display: flex;

  ${(p) => p.theme.breakpoints.up("md")} {
    align-items: center;
    justify-content: space-between;
    flex: 1 1 0%;
  }
`;
