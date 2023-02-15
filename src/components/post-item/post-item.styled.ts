import styled from "styled-components";
import { Link } from "../link";

export const StyledPostItem = styled(Link)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "header content content image";
  color: inherit;
  text-decoration: none;
  margin-top: 1em;
  margin-bottom: 1.425em;
  padding-top: 1.425em;
  border-radius: 0.4rem;
  background-color: ${(p) => p.theme.semanticColors.bodyBackground};
  box-shadow: ${(p) => p.theme.semanticColors.cardShadowHovered};

  &:hover {
    box-shadow: ${(p) => p.theme.semanticColors.cardShadow};
  }

  ${(p) => p.theme.breakpoints.down("md")} {
    display: flex;
    flex-direction: column;
  }

  .post-meta,
  .post-preview,
  .post-image {
    padding: 0.5rem;
  }

  .post-meta,
  .post-preview {
    color: ${(p) => p.theme.semanticColors.bodySubtext};
  }

  .post-meta {
    grid-area: header;

    p {
      margin: 0;
      font-size: 0.8rem;
    }
  }

  .post-preview {
    grid-area: content;
    font-size: 1rem;

    ${(p) => p.theme.breakpoints.down("md")} {
      visibility: hidden;
      display: none;
    }
  }

  .post-image {
    grid-area: image;

    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
      border-radius: 6px;
    }
  }

  h2 {
    font-weight: 800;
    line-height: 1.09;
    font-size: 1.625rem;
    letter-spacing: -0.7px;
    color: ${(p) => p.theme.semanticColors.bodyText};
  }
`;
