const fs = require("fs");

class Repository {
  constructor(path) {
    this.path = path;
  }

  lerArquivo = async () => {
    let resultado = await fs.promises.readFile(this.path, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };
}

module.exports = Repository;
