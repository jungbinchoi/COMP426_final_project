import { db } from "./db.mjs";

export class Utils {
  static #currWord = "";

  static async newWord() {
    try {
      return Utils.#fetchWord();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async newHint() {}

  static async updateScore() {} // request: "1" or "2" ...

  static async getScores() {} // returns: {"1": 20, "2": 10 ...}

  // Private Utility Functions
  static async #fetchWord() {
    try {
      let checked = false;
      let randWord;

      while (!checked) {
        let randWordProm = await fetch(
          "https://random-word-api.herokuapp.com/word?length=5"
        );

        if (!randWordProm.ok) {
          throw new Error("Random-Word API Error");
        }

        randWord = await randWordProm.json();

        Utils.#currWord = randWord[0];

        checked = Utils.#checkWord();
      }

      return Utils.#currWord;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async #checkWord() {
    try {
      let result = await db.get(
        "SELECT word FROM words WHERE word = ?",
        Utils.#currWord
      );
      return result === undefined;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
