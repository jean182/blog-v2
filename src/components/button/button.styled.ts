import { primaryButtonStyles, sharedButtonStyles } from "@assets/styles";
import styled from "styled-components";

export const StyledButton = styled.button<{
  primary?: boolean;
}>`
  ${sharedButtonStyles}
  ${(p) => p.primary && primaryButtonStyles}
`;
