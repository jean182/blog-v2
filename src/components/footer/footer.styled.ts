import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  font-size: 14px;
  font-weight: 300;
  padding: 0.5rem 0;
  margin-top: auto;

  ${(p) => p.theme.breakpoints.down("md")} {
    flex-direction: column;
    padding: 0rem 1rem;
  }

  p,
  a {
    padding: 0.5rem;
  }

  a {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
    display: inherit;
    flex-shrink: 0;
    align-items: center;
    margin-right: auto;
  }

  p {
    margin: auto 0 0 0;
  }
  .contact-url {
    span {
      margin-left: 0.2rem;
    }
  }

  .basic,
  .about-url,
  .contact-url {
    display: flex;
    flex-direction: column;
  }
`;
