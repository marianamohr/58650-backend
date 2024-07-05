const userRouter = require("./routes/usuarios.router");
const eventRouter = require('./routes/eventos.router')
const path = require('path');
const express = require("express");
const logMid = require("./middlewares/log.middleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static((path.join(`${__dirname}/../public`))));

app.use(logMid)

app.use("/usuarios", userRouter);
app.use("/eventos", eventRouter);

module.exports = app;
