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

app.get("/start/run", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.get("/start/game", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.get("/end/run", (req, res) => {
  res.status(501).send("Not Implemented");
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

app.get("/hint/generate", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.get("/hint/amount", async (req, res) => {
  let result = await Utils.getHint();

  if (typeof result !== "number") {
    res.status(500).send("Database Error");
  } else {
    res.json({ hintLeft: result });
  }
});

app.put("/hint/amount", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.get("/score", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.put("/score", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.get("/score/top/amount", (req, res) => {
  res.status(501).send("Not Implemented");
});

app.listen(port, () => {
  console.log(`Running --- http://localhost:${port}`);
});
