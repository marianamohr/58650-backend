const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);
const viewsRouter = require("./routes/views.router");
const socketIO = require("socket.io");

const http = require("http");

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

const mensagens = [];
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

const staticPath = path.join(`${__dirname}/public`);

app.use("/static", express.static(staticPath));

app.use("/views", viewsRouter);

io.on("connection", (socket) => {
  console.log("Usuário conectado");
  //socket.emit("messages",  mensagens);

  socket.on("new-message", function (data) {
    data.socket_id = socket.id;
   // console.log(data);
    //mensagens.push(data);
    socket.broadcast.emit("messages", data);
  });

  const myTimeout = setTimeout(()=> {
    console.log("acabou")
    io.emit("acabou", "Acabou o tempo")
  }, 50000);

  function myStopFunction() {
    clearTimeout(myTimeout);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = server;
