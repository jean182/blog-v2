import React from "react";
import { labelledBy } from "../modal.utils";
import { StyledDialog } from "./dialog.styled";

type BackdropProps = {
  children: React.ReactNode;
  id: string;
  open: boolean;
};

const Dialog = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, id, open }, dialogRef) => {
    return (
      <StyledDialog
        className={`modal fade`}
        id={id}
        ref={dialogRef}
        aria-labelledby={labelledBy(id)}
        aria-hidden={!open}
        tabIndex={-1}
        style={open ? { display: "block" } : { display: "none" }}
        aria-modal
        role="dialog"
      >
        {children}
      </StyledDialog>
    );
  }
);

export default Dialog;
