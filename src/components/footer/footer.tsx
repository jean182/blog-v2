import { ContactForm } from "@components/contact-form";
import { Submit } from "@components/contact-form/submit";
import { Link } from "@components/link";
import { Modal } from "@components/modal";
import { ModalImperativeHandle } from "@components/modal/modal.interfaces";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { RiStackOverflowFill } from "@react-icons/all-files/ri/RiStackOverflowFill";
import { formatContactKey, IContactKeys, INavigationProps, useTranslations } from "@shared";
import * as React from "react";
import { StyledFooter } from "./footer.styled";

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

export default function Footer({ navRef, contact }: INavigationProps) {
  const modalRef = React.useRef<ModalImperativeHandle | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const [{ t: tContact }, { t }, { t: tNavLinks }] = useTranslations([
    "contact",
    "footer",
    "navLinks",
  ]);
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
          ref={triggerRef}
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
          triggerRef={triggerRef}
          id="contact-dialog"
          title={tContact("title") ?? ""}
          navRef={navRef}
          footerContent={
            <Submit onClose={() => modalRef.current?.closeModal()} />
          }
        >
          <ContactForm />
        </Modal>
      </div>
    </StyledFooter>
  );
}
