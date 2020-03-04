const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withCss(
  withSass({
    publicRuntimeConfig: {
      APP_NAME: "MRS Agreso",
      APP_DESCRIPTION:
        "MRS Agreso provides comprehensive solutions to develop efficient, sustainable and quality agriculture through a harmonious combination of technology, production and agricultural practices.",
      API_DEVELOPMENT: "http://localhost:5000/api",
      API_PRODUCTION: "http://greensowing/api",
      PRODUCTION: false,
      DOMAIN_DEVELOPMENT: "http://localhost:3000",
      DOMAIN_PRODUCTION: "http://greensowing.com.vn"
    },
    FACEBOOK_APP_ID: "2648142732139247"
  })
);
