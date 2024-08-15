const userModel = require("./src/model/user.model");

const mongoose = require("mongoose");

const main = async () => {
  mongoose
    .connect(
      "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

    await userModel.create(
        {
          first_name: "Guilherme",
          last_name: "Soares",
          email: "gui@gmail.com",
          password: "123456",
        },
        {
          first_name: "Mari",
          last_name: "Mohr",
          email: "marimohr@gmail.com",
          password: "123456",
        },
        {
          first_name: "Ana",
          last_name: "Mohr",
          email: "anamohr@gmail.com",
          password: "123456",
        },
        {
          first_name: "Pedro",
          last_name: "Silva",
          email: "pedro@gmail.com",
          password: "123456",
        },
        {
          first_name: "Lucas",
          last_name: "Pereira",
          email: "lucas@gmail.com",
          password: "123456",
        },
        {
          first_name: "Julia",
          last_name: "Santos",
          email: "julia@gmail.com",
          password: "123456",
        },
        {
          first_name: "Carlos",
          last_name: "Oliveira",
          email: "carlos@gmail.com",
          password: "123456",
        },
        {
          first_name: "Fernanda",
          last_name: "Costa",
          email: "fernanda@gmail.com",
          password: "123456",
        },
        {
          first_name: "Rafael",
          last_name: "Melo",
          email: "rafael@gmail.com",
          password: "123456",
        },
        {
          first_name: "Camila",
          last_name: "Ferreira",
          email: "camila@gmail.com",
          password: "123456",
        },
        {
          first_name: "Bianca",
          last_name: "Alves",
          email: "bianca@gmail.com",
          password: "123456",
        },
        {
          first_name: "Thiago",
          last_name: "Rodrigues",
          email: "thiago@gmail.com",
          password: "123456",
        },
        {
          first_name: "Roberto",
          last_name: "Martins",
          email: "roberto@gmail.com",
          password: "123456",
        }
      );
      
};

main();