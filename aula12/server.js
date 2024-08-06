const express = require("express");
const upload = require("./multerConfig");
// Importar a instância do Multer configurada
const fs = require("fs");
const app = express();

// Rota para upload de arquivo
app.post("/upload", upload.single("file"), function (req, res) {
  try {
    const dados = fs.readFileSync(`./${req.file.path}`, "utf8");
    console.log(dados);
    // list.user.adress?.
    // A manipulação do arquivo enviado pode ser feita aqui
    res.send("Arquivo enviado com sucesso!");
  } catch (error) {
    res.status(500).json({error: error.message})
  }
});

app.listen(4000, function () {
  console.log("Servidor rodando na porta 4000");
});
