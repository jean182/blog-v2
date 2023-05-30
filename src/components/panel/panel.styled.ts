import styled from "styled-components";

import { systemFont } from "@assets/styles";

export const PanelWrapper = styled.div`
  // WIP colors
  --panelBg: #fff9e0;
  --panelText: #856404;
  --panelBorder: hsla(0, 0%, 0%, 0.2);

  body.dark & {
    --panelBg: #d1ecf1;
    --panelText: #0c5460;
    --panelBorder: hsla(201, 100%, 50%, 0.78);
  }
  color: var(--panelText);
  background-color: var(--panelBg);
  border-color: var(--panelBorder);
  font-size: 0.8em;
  border-radius: 0.75em;
  padding: 0.75em;
  word-break: keep-all;
  margin-bottom: 1rem;
  border: 1px solid var(--panelBorder);
  margin-top: 3rem;
  ${systemFont}
`;
