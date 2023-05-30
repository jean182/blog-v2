import { useTranslations } from "@shared/hooks";
import { graphql } from "gatsby";
import * as React from "react";

export default function AboutPage() {
  const { t } = useTranslations("bio");
  return (
    <div className="container">
      <p>{t("main")}</p>
      <p>{t("secondary")}</p>
    </div>
  );
}

export const query = graphql`
  query AboutPage {
    site {
      ...SiteInformation
    }
  }
`;
