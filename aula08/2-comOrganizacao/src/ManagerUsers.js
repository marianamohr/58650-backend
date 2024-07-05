const fs = require("fs");
const path = require('path');

class ManagerUsers {
    #pathData = path.join(`${__dirname}/data/users.json`);
    constructor() {}
  
    #lerArquivo = async () => {

      let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
      const resultadoParsed = await JSON.parse(resultado);
      return resultadoParsed;
    };
    criarUsuario = async (user) => {
      const resultadoParsed = await this.#lerArquivo();
      const id = resultadoParsed.at(-1).id + 1;
      user.id = id;
      resultadoParsed.push(user);
  
      const dataToSave = await JSON.stringify(resultadoParsed);
  
      await fs.promises.writeFile(this.#pathData, dataToSave);
    };
  
    consultarUsuarios = async () => {
      const resultadoParsed = await this.#lerArquivo();
      return resultadoParsed;
    };
  
    consultaByName = async (name) => {
      const resultadoParsed = await this.#lerArquivo();
      const userFound = resultadoParsed.filter((user) => user.name === name);
      return userFound;
    };
  
    updateUser = async (dataToUpdate, id) => {
      const resultadoParsed = await this.#lerArquivo();
  
      const userFound = resultadoParsed.filter((user) => user.name === name);
      return userFound;
    };
  }

  module.exports = ManagerUsers