import { db } from "./db.mjs";

export class Utils {
  static #currWord = "";

  static async newWord() {}

  static async newHint() {}

  static async updateScore() {} // request: "1" or "2" ...

  static async getScores() {} // returns: {"1": 20, "2": 10 ...}
}
