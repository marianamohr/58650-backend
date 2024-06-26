const geraNumeroAleatorio = () => {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
};

const geraLista = (limit) => {
  const array = new Array(limit);

  for (let index = 0; index < array.length; index++) {
    array[index] = geraNumeroAleatorio();
  }
  return array;
};

const contagemDeNumeros = (lista) => {
    const numeros = {};
    lista.forEach((numero) => {
       console.log(numero, numeros[numero])
      // 15
      if(!numeros[numero]){
          numeros[numero] = 1
      } else {
          numeros[numero] = numeros[numero] + 1
      }
      console.log(numero, numeros[numero])
    });
  
    return numeros;
}

// {
//1: 3,
//2: 5,
// 3: 2
//}

const main = () => {
  const lista = geraLista(200);
  //console.log(lista);
  const contagem = contagemDeNumeros(lista);
  const xablau = undefined
  console.log("AAAA",!xablau)
  // console.log(contagem)
};

main();
