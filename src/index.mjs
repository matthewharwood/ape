import express from "express";
import { PORT, CURRENT_DOMAIN } from "./constants.mjs";
import { h } from "preact";
import render from "preact-render-to-string";
/** @jsx h */

// silly example component:
const Fox = ({ name }) => (
  <div class="fox">
    <h5>{name}</h5>
    <p>This page is all about {name}.</p>
  </div>
);

const app = express();

app.get("/", (req, res) => {
  let html = render(<Fox name={req.params.fox} />);
  // send it back wrapped up as an HTML5 document:
  res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);
});

app.listen(PORT.APP, () => {
  console.log(`Example app listening at ${CURRENT_DOMAIN}`);
});
