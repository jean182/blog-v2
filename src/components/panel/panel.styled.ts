import styled from "styled-components";

import { systemFont } from "@assets/styles";

export const PanelWrapper = styled.div`
  color: ${(p) => p.theme.semanticColors.primaryButtonText};
  background-color: ${(p) => p.theme.semanticColors.primaryButtonBackground};
  font-size: 0.8em;
  border-radius: 0.75em;
  padding: 0.75em;
  word-break: keep-all;
  margin-bottom: 1rem;
  border: 1px solid
    ${(p) => p.theme.semanticColors.primaryButtonBackgroundHovered};
  margin-top: 3rem;
  ${systemFont}

  a {
    color: ${(p) => p.theme.semanticColors.primaryButtonText};
  }
`;
