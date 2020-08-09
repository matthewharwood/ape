const express = require("express");
const { PORT, CURRENT_DOMAIN } = require("./constants");

const render = require("preact-render-to-string");
const { Fox } = require("./static/bundle");

const app = express();

app.get("/", (req, res) => {
  let html = render(Fox({ name: "hello" }));
  // send it back wrapped up as an HTML5 document:
  res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);
});

app.listen(PORT.APP, () => {
  console.log(`Example app listening at ${CURRENT_DOMAIN}`);
});
