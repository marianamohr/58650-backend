/* console.log("Tarefa Iniciada!");
console.log("Executando...");

for (let index = 0; index <= 5; index++) {
  console.log(index);
}
console.log("Tarefa Terminada!"); */

const contador = () => {
  let counter = 1;
  console.log("Executando...");
  let timer = setInterval(() => {
    console.log(counter++);
    if (counter > 10) {
      clearInterval(timer);
    }
  }, 5000);
};

let operacao = () => console.log("Executando...");

console.log("Tarefa Iniciada!");
contador();
console.log("Tarefa Terminada!");
