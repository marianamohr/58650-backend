// constante
const numero = 10;

// variável possivel reatribuir valor
let numero2 = 20;
console.log(numero2); // 20

// deprecated
// nao pode usar
var numero3 = 30;

numero2 = 40;
console.log(numero2); // 40


const string = "Mari Mohr";

const objeto = {
// key  value
  nome: "Mari",
  idade: 34,
  professor: true,
  tutor: false,
};
// dot notation
console.log(objeto.nome)
const xablau = 'nome'
console.log(objeto[xablau])


//     index    0   1   2   3   4
const array = [ 1 , 2 , 3 , 4 , 5];

console.log(array[0])
               

const educadores = [
  {
    nome: "Mari",
    idade: 34,
    professor: true,  // index 0
    tutor: false,
  },
  {
    nome: "Jhony",
    idade: 22,
    professor: false, // index 1
    tutor: true,
    cidade: 'Recife'
  },
];

console.log(educadores[0].cidade);
console.log(educadores[1].cidade);