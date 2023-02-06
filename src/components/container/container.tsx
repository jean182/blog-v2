import React from "react";

import { IContainerProps } from "./container.interfaces";
import { StyledContainer } from "./container.styled";

export default function Container({ children }: IContainerProps) {
  return <StyledContainer className="container">{children}</StyledContainer>;
}
