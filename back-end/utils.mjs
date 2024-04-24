import { db } from "./db.mjs";

export class Utils {
  static #currWord = "";

  static async startRun() {}

  static async startGame() {}

  static async endRun() {}

  static async endGame() {}

  static guess(word) {
    if (word === undefined || typeof word !== "string") {
      return null;
    }

    if (word === this.#currWord) {
      return { correct: true, results: [] };
    } else {
      let spliced = word.split("");
      let resultsArr = [];

      spliced.map((char, i) => {
        resultsArr.push({
          inWord: word.includes(char),
          inPlace: char === word[i],
        });
      });

      return { correct: false, results: resultsArr };
    }
  }

  static async generateHint() {}

  static async getHint() {
    try {
      let result = await db.get(
        "SELECT hint FROM runs WHERE id = (SELECT MAX(id) FROM runs)"
      );

      return result.hint;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async updateHint() {
    try {
      await db.run(
        "UPDATE runs SET hint = CASE" +
          " WHEN hint <= 2 THEN hint + 1" +
          " ELSE 3 END" +
          " WHERE id = (SELECT MAX(id) FROM runs)"
      );

      return await Utils.getHint();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async getScore() {
    try {
      let result = await db.get(
        "SELECT score FROM runs WHERE id = (SELECT MAX(id) FROM runs)"
      );

      return result.score;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async updateScore() {
    try {
      await db.run(
        "UPDATE runs SET score = score + 1 WHERE id = (SELECT MAX(id) FROM runs)"
      );

      return await Utils.getScore();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async getTopScore(amount) {
    if (amount === undefined || typeof amount !== "number") {
      return { valid: false };
    }

    try {
      let result = await db.all(
        "SELECT score FROM runs ORDER BY score DESC LIMIT ?",
        amount
      );

      return result.map((s) => s.score);
    } catch (e) {
      console.error(e);
      return { valid: true };
    }
  }
}
