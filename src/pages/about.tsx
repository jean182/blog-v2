import { graphql } from "gatsby";
import * as React from "react";

export default function AboutPage() {
  return (
    <div className="container">
      <p>This is the about page</p>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      ...SiteInformation
    }
  }
`;
