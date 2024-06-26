const fs = require("fs").promises;

const operacoesAsync = async () => {
  try {
    await fs.writeFile("./data/exemploPromessa.txt", "Hello Coders! Virei um arquivo!");
    let resultado = await fs.readFile("./data/exemploPromessas.txt", "utf-8");
    console.log(resultado);
    await fs.appendFile("./data/exemploPromessa.txt", "\nMais conteúdo! ");
    resultado = await fs.readFile("./data/exemploPromessa.txt", "utf-8");
    console.log(resultado);
  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();