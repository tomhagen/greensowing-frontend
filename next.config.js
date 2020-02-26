const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withCss(
  withSass({
    publicRuntimeConfig: {
      APP_NAME: "MRS Agreso",
      APP_DESCRIPTION: "Agricultural Resources Solutions",
      API_DEVELOPMENT: "http://localhost:5000/api",
      API_PRODUCTION: "http://greensowing/api",
      PRODUCTION: false,
      DOMAIN_DEVELOPMENT: "http://localhost:3000",
      DOMAIN_PRODUCTION: "http://greensowing.com.vn"
    }
  })
);
