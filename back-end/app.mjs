import express from "express";
import bodyParser from "body-parser";
import { Utils } from "./utils.mjs";

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, COMP 426!");
});

app.listen(port, () => {
  console.log(`Running --- http://localhost:${port}`);
});
