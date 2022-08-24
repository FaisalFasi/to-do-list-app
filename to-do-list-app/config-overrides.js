const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@UI": "src/common/UI",
  })(config);

  return config;
};
