const express = require("express");
const config = require("./services/config");
const bodyParser = require("body-parser");

const message = require("./routes/msg")
const errorHandler = require("./services/errorsHandler");

const app = express();
const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(errorHandler);
app.use("/msg", message);

app.listen(port);
