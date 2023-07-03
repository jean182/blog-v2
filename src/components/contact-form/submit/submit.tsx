import { Button } from "@components/button";
import { useTranslations } from "@shared/hooks";
import React from "react";
import { SubmitFormProps } from "./submit.interfaces";
import { StyledSubmit } from "./submit.styled";

export default function SubmitContactForm({ onClose }: SubmitFormProps) {
  const { t } = useTranslations("contact");
  return (
    <StyledSubmit>
      <Button type="button" onClick={onClose}>
        {t("cancel")}
      </Button>
      <Button type="submit" form="contact-form" primary>
        {t("submit")}
      </Button>
    </StyledSubmit>
  );
}
