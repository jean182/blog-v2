import { Link } from "@components/link";
import { Modal } from "@components/modal";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { RiStackOverflowFill } from "@react-icons/all-files/ri/RiStackOverflowFill";
import { formatContactKey, IContactKeys, useTranslations } from "@shared";
import * as React from "react";
import { IFooterProps } from "./footer.interfaces";
import { StyledFooter } from "./footer.styled";
import { ModalImperativeHandle } from "@components/modal/modal.interfaces";
import { ContactForm } from "@components/contact-form";

const contactToIcon = (key: IContactKeys) => {
  switch (key) {
    case "github":
      return FiGithub;
    case "linkedIn":
      return FiLinkedin;
    default:
      return RiStackOverflowFill;
  }
};

export default function Footer({ contact }: IFooterProps) {
  const modalRef = React.useRef<ModalImperativeHandle | null>(null);
  const { t } = useTranslations("footer");
  const { t: tNavLinks } = useTranslations("navLinks");
  return (
    <StyledFooter aria-label="Footer" className="container">
      <div className="basic">
        <p>
          {new Date().getFullYear()}, {t("copyright")}
        </p>
      </div>
      <div className="about-url">
        <Link to="/">{tNavLinks("home")}</Link>
        <Link to="/posts">{tNavLinks("posts")}</Link>
        <Link to="/about">{tNavLinks("about")}</Link>
        <button
          type="button"
          className="footer-btn"
          onClick={modalRef.current?.openModal}
        >
          {tNavLinks("contact")}
        </button>
      </div>
      <div className="contact-url">
        {contact &&
          Object.entries(contact).map(([key, value]) => {
            const contactKey = key as IContactKeys;
            const Icon = contactToIcon(contactKey);
            return (
              <Link
                key={contactKey}
                aria-label={formatContactKey(contactKey)}
                to={value as string}
                target="_blank"
                className="icon-link"
              >
                <Icon />
                <span>{formatContactKey(contactKey)}</span>
              </Link>
            );
          })}
        <Modal
          ref={modalRef}
          id="contact-form"
          title="Contact Form"
          footerContent={
            <>
              <button type="button" onClick={modalRef.current?.closeModal}>
                Cancel
              </button>
              <button type="submit" form="contact-form">
                Submit
              </button>
            </>
          }
        >
          <ContactForm />
        </Modal>
      </div>
    </StyledFooter>
  );
}
