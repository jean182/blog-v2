import React from "react";
import { IButtonProps } from "./button.interfaces";
import { StyledButton } from "./button.styled";

export default function Button({ children, primary, ...rest }: IButtonProps) {
  return <StyledButton primary={primary}  {...rest}>{children}</StyledButton>;
}
