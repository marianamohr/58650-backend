const numero = 9;

if (numero === 10) {
  console.log("É igual a 10");
} else {
  console.log("É diferente de 10");
}

if (numero === 10) {
  console.log("É igual a 10");
} else if (numero === 9 ) {
  console.log("É igual a 9");
} else {
  console.log("Nenhum numero conhecido");
}

switch (numero) {
  case 10:
    console.log("É igual a 10");
    break;
  case 9:
    console.log("É igual a 9");
    break;
  default:
    console.log("Nenhum numero conhecido");
    break;
}