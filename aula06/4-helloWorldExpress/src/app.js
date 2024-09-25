const express = require("express");

const app = express();

app.get("/admin", (req, res) => {
    console.log(req)
  res.status(200).send('<h1 style="color: blue; font-size: 24px;" > Hello Lucas</h1>');
});

app.get("/hello/:nome", (req, res) => {

  console.log(req.params)
res.status(200).send(`<h1 style="color: blue; font-size: 24px;" > Hello ${req.params.nome}</h1>`);
});


module.exports = app;
