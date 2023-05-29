import * as React from "react";
import PropTypes from "prop-types";

import { IPanel } from "./panel.interfaces";
import { PanelWrapper } from "./panel.styled";

function Panel({ children }: IPanel) {
  return <PanelWrapper>{children}</PanelWrapper>;
}

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Panel;
