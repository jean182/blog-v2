import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <p>HOME PAGE</p>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    site {
      ...SiteInformation
    }
  }
`;
