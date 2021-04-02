const Airtable = require("airtable");

const base = new Airtable({ apiKey: "keyloGFGjDynz8Y9k" }).base(
  "appnqDEaiNjZDwbku"
);

export function handleData(tableName, gotPageOfGames, gotAllGames) {
  base(tableName).select({}).eachPage(gotPageOfGames, gotAllGames);
}

export { base };
