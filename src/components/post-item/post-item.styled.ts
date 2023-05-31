import { Link } from "@components/link";
import styled from "styled-components";

export const StyledPostItem = styled(Link)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "header header image"
    "content content image"
    "time time time";
  color: inherit;
  text-decoration: none;
  padding: 1.5em 0;
  border-radius: 0.4rem;

  ${(p) => p.theme.breakpoints.down("md")} {
    grid-template-areas:
      "header header image"
      "header header image"
      "time time time";
  }

  .post-meta {
    color: ${(p) => p.theme.semanticColors.bodySubtext};
    h2 {
      color: ${(p) => p.theme.semanticColors.bodyText};
    }
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

  .time {
    grid-area: time;
    line-height: 1.5rem;
    font-weight: 300;
    font-size: 0.8rem;
    font-size: 13px;
    color: ${(p) => p.theme.semanticColors.bodySubtext};
    font-size: 1rem;
    p {
      margin: 0;
    }
    ${(p) => p.theme.breakpoints.down("md")} {
      margin-top: 1rem;
      text-align: right;
    }
  }

  .post-image {
    grid-area: image;
    ${(p) => p.theme.breakpoints.up("md")} {
      margin: auto 1em auto auto;
    }

    img {
      max-width: 112px;
      max-height: 112px;
      border-radius: 4px;
    }
  }

  h2 {
    font-weight: 800;
    line-height: 1.09;
    font-size: 1.625rem;
    letter-spacing: -0.7px;
    margin: 0;
    color: ${(p) => p.theme.semanticColors.bodySubtext};
    ${(p) => p.theme.breakpoints.down("md")} {
      font-size: 1.2rem;
    }
  }
`;
