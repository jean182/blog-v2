import React from "react";
import { labelledBy } from "../modal.utils";
import { StyledDialog } from "./dialog.styled";
import KeyboardUtils from "@shared/keyboard";

type BackdropProps = {
  children: React.ReactNode;
  handleClose: () => void
  id: string;
  open: boolean;
};

const Dialog = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, handleClose, id, open }, dialogRef) => {
    const onEscapePressed = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (KeyboardUtils.isEscapePressed(event)) {
        handleClose();
      }
    };

    return (
      <StyledDialog
        className={`modal fade`}
        id={id}
        ref={dialogRef}
        aria-labelledby={labelledBy(id)}
        onKeyDown={onEscapePressed}
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
