import { Input } from "@components/input";
import { TextArea } from "@components/textarea";
import { useTranslations } from "@shared/hooks";
import React from "react";
import { StyledForm } from "./form.styled";

type FormInputProps = {
  name: string;
  email: string;
  message: string;
};

type FormAdditionalProps = {
  "form-name": string;
};

type FormProps = FormInputProps & FormAdditionalProps;

type FormKeysProps = keyof FormProps;

export default function ContactForm() {
  const { t } = useTranslations("contact");
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault();

      const formElement = event.target as HTMLFormElement;
      const isValid = formElement.checkValidity();

      formElement.classList.add("was-validated");

      const firstInvalidInput = formElement.querySelector(
        ":invalid"
      ) as HTMLInputElement;

      firstInvalidInput?.focus();

      if (isValid) {
        const dataObject = new FormData(formElement);
        const data = [...dataObject].reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value,
          }),
          {} as unknown as FormProps
        );
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(data),
        });
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        } else {
          formElement.reset();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledForm
      name="contact"
      id="contact-form"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <Input label={t("name")} id="name" name="name" required />
      <Input label={t("email")} id="email" type="email" name="email" required />
      <TextArea
        label={t("message")}
        className="textarea"
        id="message"
        name="message"
        required
        rows={7}
      />
    </StyledForm>
  );
}

const encode = (data: FormProps) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(data[key as FormKeysProps])
    )
    .join("&");
};
