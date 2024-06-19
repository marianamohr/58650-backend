const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        reject(`Não é possível dividir ${dividendo} por ${divisor}`);
      } else {
        resolve(dividendo / divisor);
      }
    }, 200);
  });
};

const ehPar = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} é Par`);
      } else {
        reject(`${num} não é Par`);
      }
    }, 1000);
  });
};

/*  divisao(3, 2)
  .then((result) => {
    console.log(".then do divisao: ", result);
    ehPar(result)
      .then((result) => {
        divisao(result/2)
        .then((result) =>{
          console.log(".then do ehPar: ", result);
        })
        .catch((error)=>{
          console.log(".catch do eh par: ", error);
        })
        console.log(".then do ehPar: ", result);
      })
      .catch((error) => {
        console.log(".catch do eh par: ", error);
      });
  })
  .catch((error) => {
    console.log(".cath do dividir: ", error);
  });  */

const main = async () => {
  try {
    const valor1 = await divisao(5,2);
    const result = await ehPar(valor1);
    console.log("com await", result);
    /* const valor2 = await divisao(5,2);
    const result2 = await ehPar(valor2);
    console.log("com await", result, result2);
    console.log(valor1, valor2) */
  } catch (error) {
    console.log("error com await", error);
  }
};

main();
