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

  if (result === null) {
    res.status(500).send("Database Error");
  } else {
    res.json({ hintLeft: result });
  }
});

app.put("/hint/amount", async (req, res) => {
  let result = await Utils.updateHint();

  if (result === null) {
    res.status(500).send("Database Error");
  } else {
    res.json({ hintLeft: result });
  }
});

app.get("/score", async (req, res) => {
  let result = await Utils.getScore();

  if (result === null) {
    res.status(500).send("Database Error");
  } else {
    res.json({ score: result });
  }
});

app.put("/score", async (req, res) => {
  let result = await Utils.updateScore();

  if (result === null) {
    res.status(500).send("Database Error");
  } else {
    res.json({ score: result });
  }
});

app.get("/score/top/:amount", async (req, res) => {
  let amount = "amount" in req.body ? req.body.amount : undefined;
  let result = await Utils.getTopScore(amount);

  if ("valid" in result) {
    if (result.valid) {
      res.status(500).send("Database Error");
    } else {
      res.status(400).send("Invalid 'amount'");
    }

    return;
  } else {
    res.json({ scores: result });
  }
});

app.listen(port, () => {
  console.log(`Running --- http://localhost:${port}`);
});
