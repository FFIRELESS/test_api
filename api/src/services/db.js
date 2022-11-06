const config = require("./config");

module.exports = require("knex")({
    client: "pg",
    connection: {
        port: config.dbPort,
        host: config.dbHost,
        user: config.dbUser,
        password: config.dbPassword,
        database: config.dbDatabase,
    },
});