import styled from "styled-components";

export const StyledPost = styled.div`
  ${(p) => p.theme.breakpoints.up("md")} {
    font-size: 1.275rem;
    font-weight: 300;
    letter-spacing: 0.002em;
    line-height: 2.375rem;
  }

  ${(p) => p.theme.breakpoints.down("md")} {
    margin-top: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(p) => p.theme.semanticColors.bodySubtext};
  }

  blockquote {
    padding-left: 23px;
    margin-left: 0px;
    font-style: italic;
    box-shadow: inset 3px 0 0 0 rgba(41, 41, 41, 1);
  }
`;
