const moment = require("moment");

const main = (dataInput) => {
  const data = moment();
  const dataNascimento = moment(dataInput, "DD/MM/YYYY");
  console.log(dataNascimento.isValid());
  if (!dataNascimento.isValid()) {
    console.error("Data invalida");
    return;
  }
  const diff = data.diff(dataNascimento, "month")
  console.log(diff)

  const anos = data.diff(dataNascimento, 'years');
    dataNascimento.add(anos, 'years');

    const meses = data.diff(dataNascimento, 'months');
    dataNascimento.add(meses, 'months');

    const dias = data.diff(dataNascimento, 'days');


    console.log(`Idade aproximada: ${anos} anos, ${meses} meses, e ${dias} dias.`);
};

main("29/11/1989");
