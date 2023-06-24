import { Button } from "@components/button";
import React from "react";
import { StyledSubmit } from "./submit.styled";
import { SubmitFormProps } from "./submit.interfaces";

export default function SubmitContactForm({ onClose }: SubmitFormProps) {
  return (
    <StyledSubmit>
      <Button type="button" onClick={onClose} primary>
        Cancel
      </Button>
      <Button type="submit" form="contact-form">
        Submit
      </Button>
    </StyledSubmit>
  );
}
