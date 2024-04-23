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

  static async updateHint() {}

  static async getScore() {}

  static async updateScore() {}

  static async getTopScore(amount) {}
}
