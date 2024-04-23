import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Utils } from "./utils.mjs";

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, COMP 426!");
});

app.get("/guess/:word", (req, res) => {
  let word = "word" in req.body ? req.body.req : undefined;
  let result = Utils.guess(word);

  if (!result) {
    res.status(400).send("Bad Request");
    return;
  } else {
    res.json(result);
  }
});

app.listen(port, () => {
  console.log(`Running --- http://localhost:${port}`);
});
