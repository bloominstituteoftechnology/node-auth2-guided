require("dotenv").config();

const pgConnection = process.env.DATABASE_URL || "postgres://ywpfkpsxplftnm:c0fc239cb0b2ba329d1d108d977f49e3c776ea9835c494381f4369e97af42adb@ec2-18-211-86-133.compute-1.amazonaws.com:5432/d6h97b06f9brfu";
// if using a local postgres server, please create the database manually, Knex will not create it autmatically

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
