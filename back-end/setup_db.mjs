import { db } from "./db.mjs";

await db.run(
  "CREATE TABLE scores (one INTEGER NOT NULL, two INTEGER NOT NULL, three INTEGER NOT NULL, four INTEGER NOT NULL, five INTEGER NOT NULL, six INTEGER NOT NULL)"
);

await db.run("CREATE TABLE words (word TEXT NOT NULL)");

await db.run("INSERT INTO scores VALUES (0, 0, 0, 0, 0, 0)");

db.close();
