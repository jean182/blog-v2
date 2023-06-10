import React from "react";
import { StyledDialog } from "./dialog.styled";
import { labelledBy } from "../modal.utils";

type BackdropProps = {
  children: React.ReactNode;
  id: string;
  show: boolean;
};

export default function Dialog({ children, show, id }: BackdropProps) {
  const openClassName = show ? "show" : "";
  return (
    <StyledDialog
      className={`modal fade ${openClassName}`}
      id={id}
      aria-labelledby={labelledBy(id)}
      aria-hidden={!show}
      tabIndex={-1}
      style={show ? { display: "block" } : { display: "none" }}
      aria-modal
      role="dialog"
    >
      {children}
    </StyledDialog>
  );
}
