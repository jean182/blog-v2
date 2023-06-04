import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { StyledNotFound } from "@assets/styles/404.styled";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <StyledNotFound>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </StyledNotFound>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
