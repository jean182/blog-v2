import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { RiStackOverflowFill } from "@react-icons/all-files/ri/RiStackOverflowFill";
import * as React from "react";
import { formatContactKey, IContactKeys } from "../../shared";
import { Link } from "../link";
import { IFooterProps } from "./footer.interfaces";
import { StyledFooter } from "./footer.styled";

const contactToIcon = (key: IContactKeys) => {
  switch (key) {
    case "github":
      return FiGithub;
    case "instagram":
      return FiInstagram;
    case "linkedIn":
      return FiLinkedin;
    default:
      return RiStackOverflowFill;
  }
};

export default function Footer({ contact }: IFooterProps) {
  return (
    <StyledFooter aria-label="Footer" className="container">
      <div className="basic">
        <p>{new Date().getFullYear()}, loserkid All Rights Reserved</p>
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
        {Object.entries(contact).map(([key, value]) => {
          const contactKey = key as IContactKeys;
          const Icon = contactToIcon(contactKey);
          return (
            <Link
              key={contactKey}
              aria-label={formatContactKey(contactKey)}
              to={value}
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
