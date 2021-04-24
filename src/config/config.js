require("dotenv").config({ silent: "production" });

const {
  DB_USERNAME_DEV,
  DB_PASSWORD_DEV,
  DB_DATABASE_DEV,
  DB_HOST_DEV,
  DB_USERNAME_PRODUCTION,
  DB_PASSWORD_PRODUCTION,
  DB_DATABASE_PRODUCTION,
  DB_HOST_PRODUCTION,
  DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_DATABASE_DEV,
    host: DB_HOST_DEV,
    dialect: DB_DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME_PRODUCTION,
    password:  DB_PASSWORD_PRODUCTION,
    database: DB_DATABASE_PRODUCTION,
    host: DB_HOST_PRODUCTION,
    dialect: DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
