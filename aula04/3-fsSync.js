const fs = require("fs");

fs.writeFileSync("./data/exemplo.txt", "Hello Coders! Virei um arquivo!");

// exists = fs.existsSync("./data/exemplo.txt");

let conteudo = fs.readFileSync("./data/exemplo.txt", "utf-8");
console.log(conteudo);
conteudo = conteudo + " Mais Conteudo!! ";
console.log(conteudo);
conteudo = conteudo + " Que legal!";
// fs.appendFileSync("./data/exemplo.txt", " Mais conteudo!!");
fs.writeFileSync("./data/exemplo.txt", conteudo);
conteudo = fs.readFileSync("./data/exemplo.txt", "utf-8");
console.log(conteudo);

// fs.unlinkSync("./data/exemplo.txt");
