const taxaContrato = 0;
// usado para sempre deixar um valor default
const variavelPreenchida = taxaContrato || "Sem Valor";

console.log(variavelPreenchida);
// aceita zero como valor
const variavelNullish = taxaContrato ?? "Sem Valor 2";

console.log(variavelNullish);

class Persona {
  #fullname;
  constructor(nome, sobrenome, dataDeNacimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.#fullname = `${this.nome} ${this.sobrenome}`;
   //  this.idade = this.#calculaIdade
  }
  getFßullName = () => this.#fullname;
  #metodoPrivado = () => null;
 //  #calculaIdade = () => calcular a idade
  
}

const pessoa1 = new Persona("Mari","Mohr")
console.log(pessoa1.getFullName())

