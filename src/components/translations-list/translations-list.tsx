import { Link } from "@components/link";
import {
  codeToLanguage,
  formatPostLink,
  formatPostsLink,
} from "@shared/formatting";
import * as React from "react";
import { ITranslationList } from "./translations-list.interfaces";
import { Panel } from "@components/panel";
import { useTranslations } from "@shared/hooks";

export const GITHUB_USERNAME = "jean182";
export const GITHUB_REPO_NAME = "blog-v2";

export default function TranslationsList({
  langKey,
  slug,
  translations,
}: ITranslationList) {
  const { t } = useTranslations("translations");
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/posts/${slug}/index${
    langKey === "en" ? "" : `.${langKey}`
  }.mdx`;
  return (
    <Panel>
      {translations.length > 0 && (
        <span>
          <span>{t("translationAvailable")}</span>
          {translations.map((key, index) => (
            <React.Fragment key={key}>
              {key === langKey ? (
                <b>{codeToLanguage(key)}</b>
              ) : (
                <Link to={formatPostLink(key, slug)}>
                  {codeToLanguage(key)}
                </Link>
              )}
              {index === translations.length - 1 ? "" : " ⋮ "}
            </React.Fragment>
          ))}
        </span>
      )}
      {langKey !== "en" && (
        <>
          <br />
          <br />
          <Link to={formatPostLink("en", slug)}>{t("readOriginal")}</Link>
          {" ⋮ "}
          <Link to={editUrl} target="_blank" rel="noopener noreferrer">
            {t("improveTranslation")}
          </Link>
          {" ⋮ "}
          <Link to={formatPostsLink(langKey)}>{t("viewAll")}</Link>{" "}
        </>
      )}
    </Panel>
  );
}
