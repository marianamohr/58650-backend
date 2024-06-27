const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Meu primeiro HelloWorld!");
});



server.listen(8080, () => {
  console.log("To on na porta 8080");
});
