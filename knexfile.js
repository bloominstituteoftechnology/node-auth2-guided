require("dotenv").config();


const pgConnection = process.env.DATABASE_URL;
// if using a local postgres server, please create the database manually, Knex will not create it autmatically

module.exports = {
    development: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    pool: {
      min:2,
      max:10
      // afterCreate: (conn, done) => {
      //   conn.run("PRAGMA foreign_keys = ON", done);
      // },
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  // development: {
  //   client: "sqlite3",
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: "./database/auth.db3",
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run("PRAGMA foreign_keys = ON", done);
  //     },
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // },

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
