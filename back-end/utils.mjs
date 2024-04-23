import { db } from "./db.mjs";

export class Utils {
  static #currWord = "";

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
}
