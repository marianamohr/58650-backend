const fs = require("fs");
const path = require('path');

const Repository = require('./service/repository')
class TicketManager {
  #pathData = path.join(`${__dirname}/data/events.json`);
    constructor(pathData) {
      this.repository = new Repository(this.#pathData)
    }

    criarUsuario = async (user) => {
      const resultadoParsed = await  this.repository.lerArquivo()
      const id = resultadoParsed.at(-1).id + 1;
      user.id = id;
      resultadoParsed.push(user);
  
      const dataToSave = await JSON.stringify(resultadoParsed);
  
      await fs.promises.writeFile(this.#pathData, dataToSave);
    };
  
    consultarEventos = async () => {
      const resultadoParsed = await this.repository.lerArquivo()
      return resultadoParsed;
    };
  
    updateEvent = async (dataToUpdate, id) => {
      const resultadoParsed = await this.repository.lerArquivo()
  
      const userFound = resultadoParsed.filter((user) => user.name === name);
      return userFound;
    };
  
    criarEvento = async (event) => {
      const resultadoParsed = await this.repository.lerArquivo()
      const id = resultadoParsed.at(-1).id + 1;
      event.id = id;
      resultadoParsed.push(event);
  
      const dataToSave = await JSON.stringify(resultadoParsed);
  
      await fs.promises.writeFile(this.#pathData, dataToSave);
    };
  }

  module.exports = TicketManager