import { ErrorBoundary } from "@components/error";
import React from "react";
import { Helmet } from "react-helmet";
import { IHeadProps } from "./head.interfaces";

export default function HeadContainer({ lang, title }: IHeadProps) {
  return (
    <ErrorBoundary isHead>
      <title>{title}</title>
      <Helmet htmlAttributes={{ lang }} />
    </ErrorBoundary>
  );
}
