import { Link } from "@components/link";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { RiStackOverflowFill } from "@react-icons/all-files/ri/RiStackOverflowFill";
import { formatContactKey, IContactKeys, useTranslations } from "@shared";
import * as React from "react";
import { IFooterProps } from "./footer.interfaces";
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

export default function Footer({ contact }: IFooterProps) {
  const { t } = useTranslations("footer");
  return (
    <StyledFooter aria-label="Footer" className="container">
      <div className="basic">
        <p>
          {new Date().getFullYear()}, {t("copyright")}
        </p>
      </div>
      <div className="about-url">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Contact</Link>
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
      </div>
    </StyledFooter>
  );
}
