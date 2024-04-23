import { db } from "./db.mjs";

await db.run(
  "CREATE TABLE runs (id PRIMARY KEY AUTOINCREMENT, score INTEGER NOT NULL, hint INTEGER NOT NULL)"
);

await db.run(
  "CREATE TABLE games (rid INTEGER NOT NULL, word TEXT NOT NULL, FOREIGN KEY (rid) REFERENCES runs(id))"
);

db.close();
