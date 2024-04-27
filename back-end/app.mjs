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

app.get("/word", async (req, res) => {
  let result = await Utils.newWord();

  if (result === null) {
    res.status(500).send("Error: Failed to generate a new word");
    return;
  }

  res.json({ word: result });
});

app.get("/hint", async (req, res) => {
  let result = await Utils.newHint();

  if (result === null) {
    res.status(500).send("Error: Failed to generate a new hint");
    return;
  }

  res.json({ hint: result });
});

app.get("/score", (req, res) => {
  res.send("Returns dictionary of scores");
});

app.put("/score", (req, res) => {
  res.send("Updates the score");
});

app.listen(port, () => {
  console.log(`Running --- http://localhost:${port}`);
});
