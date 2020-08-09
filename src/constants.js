const env = require("dotenv");

env.config();

const ENV = {
  DEV: "dev",
  PROD: "prod",
};

const PORT = {
  APP: 3000,
  STORY_BOOK: 3100,
  SANITY: 3200,
};

const DOMAIN = {
  [ENV.DEV]: `http://localhost:${PORT.APP}/`,
  [ENV.PROD]: `https://portfolio-morningharwood.onrender.com`,
};
const APP_ENV = process.env.NODE_ENV;
const CURRENT_DOMAIN = DOMAIN[APP_ENV];
// TODO (sanity) add secret keys
const SANITY_KEY = process.env.SANITY;
module.exports = { ENV, PORT, DOMAIN, APP_ENV, CURRENT_DOMAIN, SANITY_KEY };
