const React = require("react");
const Layout = require("./src/components/layout/layout").default;

/**
 * Wraps every page in the Layout component
 * */
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
