const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        console.log("ïf")
        reject("Não é possível dividir por zero");
      } else {
        console.log("else")
        resolve(dividendo / divisor);
      }
    }, 2000);
  });
};

//console.log(divisao(4,2))


divisao(4, 0)
  .then((result) => {
    let b = 2
    console.log(result)
  })
  .catch((error) => {
    console.log(".cath do dividir: ", error, b);
  });

  console.log("Final")

