const pg = require("pg")
require("dotenv").config("../.env");

const databaseUrl = process.env.DATABASE_URL;

if (undefined === databaseUrl) {
  throw new Error(
    "Your database URL is undefined. Please fix this bug before coning"
  );
}

const pool = new pg.Pool({
  connectionString: databaseUrl,
});

module.exports = pool;
//postgres://ontkwxnv:PR-YLq6qRI8ynGxmHWD5pJNl_kcT_SK6@mel.db.elephantsql.com/ontkwxnv