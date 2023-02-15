import { Language } from "prism-react-renderer";
import { ICodeProps, ICodeUtils, PreCodeProps } from "./code.interfaces";

const langRegex = /language-(\w+)/;
const highlightLineRegex = /{([\d,-]+)}/;
const filenameRegex = /\=([\S\s]+\.(md|mdx|js|jsx|tsx|ts|json|rb|html|interfaces.ts))/;

/**
 * Returns an object with the neccesary props that the Highlight component needs to render.
 */
export const preToCodeBlock = (
  preProps: ICodeProps
): PreCodeProps | undefined => {
  const castedProps = preProps as ICodeUtils;
  let language: Language = "markdown";
  let metastring = "";
  let filename = "";
  if (castedProps?.children?.type === "code") {
    const {
      children: codeString,
      className = "",
      ...props
    } = castedProps.children.props;

    const match = langRegex.exec(className || "");
    if (Array.isArray(match) && match[1]) {
      language = match[1] as Language;
      const metaMatch = highlightLineRegex.exec(className);
      const fileMatch = filenameRegex.exec(className);
      if (Array.isArray(metaMatch) && typeof metaMatch[1] === "string") {
        metastring = metaMatch.input;
      }
      if (Array.isArray(fileMatch) && typeof fileMatch[1] === "string") {
        filename = fileMatch[1];
      }
    }

    return {
      codeString: codeString,
      className,
      filename,
      language,
      metastring,
      ...props,
    };
  }

  return undefined;
};

/**
 * Function that calculates which lines needs to be highligted.
 */
export const calculateLinesToHighlight = (meta: string) => {
  if (!highlightLineRegex.test(meta)) {
    return () => false;
  }
  const lineNumbers = highlightLineRegex
    .exec(meta)![1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)));
  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};
