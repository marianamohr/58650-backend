const express = require("express");
const healthRouter = require("./routes/health.route");
const viewsRouter = require("./routes/views.route");
const handlebars = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const pathView = path.join(`${__dirname}/views`);
const cookieRouter = require("./routes/cookie.route");
const session = require("express-session");
const sessionRouter = require("./routes/session.route");

const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cookieParser("batatinha123"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "batatinha123",
    resave: true,
    saveUninitialized: true,
  })
);

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use("/health", healthRouter);
app.use("/", viewsRouter);
app.use("/cookie", cookieRouter);
app.use("/session", sessionRouter);

mongoose
  .connect(
    "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
module.exports = app;
