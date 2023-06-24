import React from "react";
import { StyledInput } from "./input.styled";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  className?: string;
  label?: string;
  errorText?: string;
}

const Input = React.memo(
  ({ className, label, errorText, id, ...rest }: InputProps) => {
    const [validationMessage, setValidationMessage] = React.useState("");

    const onInvalid: React.FormEventHandler<HTMLInputElement> = (event) => {
      const target = event.target as HTMLInputElement;
      setValidationMessage(target.validationMessage);
    };

    const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
      const target = event.target as HTMLInputElement;

      if (!!validationMessage) {
        setValidationMessage(target.validationMessage);
      }
    };

    return (
      <StyledInput className={"field ".concat(className ?? "")}>
        <label htmlFor={id}>{label}</label>
        <input id={id} onInvalid={onInvalid} onBlur={onBlur} {...rest} />
        {!!validationMessage && (
          <div className="invalid-feedback">
            {errorText || validationMessage}
          </div>
        )}
      </StyledInput>
    );
  }
);

Input.displayName = "Input";

export default Input;
export type { InputProps };
