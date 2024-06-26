const fs = require("fs");

class ManagerUsers {
  constructor(path) {
    this.pathData = path;
  }

  #lerArquivo = async () => {
    let resultado = await fs.promises.readFile(this.pathData, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };

  #gravarArquivo = async (data) => {
    const dataToSave = await JSON.stringify(data);
    await fs.promises.writeFile(this.pathData, dataToSave);
  };

  criarUsuario = async (name, sobrenome, idade, curso) => {
    const resultadoParsed = await this.#lerArquivo();
    const user = {
      name,
      sobrenome,
      idade,
      curso,
    };
    resultadoParsed.push(user);

    await this.#gravarArquivo(resultadoParsed);
  };

  consultarUsuarios = async () => {
    const resultadoParsed = await this.#lerArquivo();
    return resultadoParsed;
  };

  consultaByName = async (name) => {
    const resultadoParsed = await this.#lerArquivo();
    const userFound = resultadoParsed.find((user) => user.name === name);
    return userFound;
  };
}

main = async () => {
  const userManager = new ManagerUsers("./data/users.json");

  //await userManager.criarUsuario("Mari", "Mohr", 34, "Backend");
  const lista = await userManager.consultarUsuarios();
  console.log(lista);
  //await userManager.criarUsuario("Jhony", "Vinicius", 22, "Backend");

  const user = await userManager.consultaByName("Mari");
  console.log(user);
};

main();
