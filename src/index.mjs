import { join, dirname } from "path";
import express from "express";
import { PORT, CURRENT_DOMAIN } from "./constants.mjs";
import render from "preact-render-to-string";
import Block from "./static/bundle.js";
import livereload from "livereload";
import connectLivereload from "connect-livereload";
const liveReloadServer = livereload.createServer();
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

liveReloadServer.watch(join(__dirname, "src", "static"));

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload());
app.use(express.static("/"));
app.use("/static", express.static(join(__dirname + "/static")));

app.get("/", (req, res) => {
  let html = render(Block.Fox({ name: "hello" }));
  // send it back wrapped up as an HTML5 document:
  res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);
});

app.listen(PORT.APP, () => {
  console.log(`Example app listening at ${CURRENT_DOMAIN}`);
});
