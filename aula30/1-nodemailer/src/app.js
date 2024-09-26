const express = require("express");
const nodemailer = require("nodemailer");
const config = require("./config/config");

const app = express();
app.use(express.json());

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "marianamohr@gmail.com",
    pass: config.gmailPasswd,
  },
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/mail", async (req, res) => {
  const { to, subject, text } = req.body;
  console.log(to, subject, text);
  await transport.sendMail({
    from: "cobrança <maricoder2024@gmail.com>",
    to: to,
    subject: subject,
    html: text,
    attachments: [],
  });
  return res.send("email enviado");
});

app.get("/mailImage", async (req, res) => {
  await transport.sendMail({
    from: "Coder Tests <maricoder2024@gmail.com>",
    to: "marianamohr@gmail.com",
    subject: "teste email",
    html: "<div> <h1> Teste com Imagem! </h1> <img src='cid:xablau'/></div>",
    attachments: [
      {
        filename: "teste.png",
        path: __dirname + "/images/teste.png",
        cid: "xablau",
      },
    ],
  });
  return res.send("email enviado");
});

module.exports = app;
