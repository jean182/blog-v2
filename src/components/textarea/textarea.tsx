import React from "react";
import { StyledTextArea } from "./textarea.styled";

interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string;
  name: string;
  className?: string;
  label?: string;
  errorText?: string;
}

const Input = React.memo(
  ({ className, label, errorText, id, ...rest }: InputProps) => {
    const [validationMessage, setValidationMessage] = React.useState("");

    const onInvalid: React.FormEventHandler<HTMLTextAreaElement> = (event) => {
      const target = event.target as HTMLTextAreaElement;
      setValidationMessage(target.validationMessage);
    };

    const onBlur: React.FocusEventHandler<HTMLTextAreaElement> = (event) => {
      const target = event.target as HTMLTextAreaElement;

      if (!!validationMessage) {
        setValidationMessage(target.validationMessage);
      }
    };

    return (
      <StyledTextArea className={"field ".concat(className ?? "")}>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} onInvalid={onInvalid} onBlur={onBlur} {...rest} />
        {!!validationMessage && (
          <div className="invalid-feedback">
            {errorText || validationMessage}
          </div>
        )}
      </StyledTextArea>
    );
  }
);

Input.displayName = "Input";

export default Input;
export type { InputProps };
