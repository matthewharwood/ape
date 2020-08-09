import express from "express";
import { PORT, CURRENT_DOMAIN } from "./constants.mjs";

import render from "preact-render-to-string";
import Block from "./static/bundle.js";

const app = express();

app.get("/", (req, res) => {
  let html = render(Block.Fox({ name: "hello" }));
  // send it back wrapped up as an HTML5 document:
  res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);
});

app.listen(PORT.APP, () => {
  console.log(`Example app listening at ${CURRENT_DOMAIN}`);
});
