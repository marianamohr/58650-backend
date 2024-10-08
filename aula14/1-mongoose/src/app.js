const express = require("express");
const healthRoute = require("./routes/health.route");
const userRoute = require("./routes/user.route");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('String de conexao')
.catch((err) => {
    console.log(err);
    process.exit(1);
});

app.use('/health', healthRoute);
app.use('/user', userRoute);


module.exports = app;