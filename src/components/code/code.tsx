import { useTheme } from "@shared/hooks";
import Highlight, { defaultProps } from "prism-react-renderer";
import contrastTheme from "prism-react-renderer/themes/duotoneDark";
import darkTheme from "prism-react-renderer/themes/vsDark";
import lightTheme from "prism-react-renderer/themes/vsLight";
import * as React from "react";
import { ICodeProps, PreCodeProps } from "./code.interfaces";
import { Filename, Line, LineContent, LineNo, Pre } from "./code.styled";
import { calculateLinesToHighlight, preToCodeBlock } from "./code.utils";

const Code = (props: PreCodeProps) => {
  const { codeString, filename, language, metastring } = props;
  const { theme: appTheme } = useTheme();
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const getTheme = () => {
    switch (appTheme) {
      case "contrast":
        return contrastTheme;
      case "dark":
        return lightTheme;
      default:
        return darkTheme;
    }
  };
  const theme = getTheme();

  return (
    <>
      {filename && (
        <Filename aria-label={filename} className={`filename-${language}`}>
          {filename}
        </Filename>
      )}
      <Highlight
        {...defaultProps}
        {...props}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="gatsby-highlight" data-language={language}>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`;
                }

                return (
                  <Line {...lineProps}>
                    <LineNo className="line-number-style">{i + 1}</LineNo>
                    <LineContent>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </LineContent>
                  </Line>
                );
              })}
            </Pre>
          </div>
        )}
      </Highlight>
    </>
  );
};

const pre = (preProps: ICodeProps) => {
  const props = preToCodeBlock(preProps);

  if (props) {
    return <Code {...props} />;
  } else {
    return (
      <pre
        {...(preProps as React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLPreElement>,
          HTMLPreElement
        >)}
      />
    );
  }
};

export default pre;
