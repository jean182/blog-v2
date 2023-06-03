import { Link } from "@components/link";
import styled from "styled-components";

export const BreadcrumbStyled = styled.nav`
  padding: 1rem 0 0 0;
  color: ${(p) => p.theme.semanticColors.link};

  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
`;

export const History = styled(Link)`
  color: ${(p) => p.theme.semanticColors.link};
  font-family: 'Open Sans', sans-serif;
  box-shadow: none;
  &[aria-current="page"] {
    font-weight: 700;
    text-decoration: none;
  }
`;

export const BreadcrumbItem = styled.li`
  display: inline;

  & + &:before {
    display: inline-block;
    margin: 0 0.25em;
    transform: rotate(15deg);
    border-right: 0.1em solid currentcolor;
    height: 0.8em;
    content: "";
  }
`;
