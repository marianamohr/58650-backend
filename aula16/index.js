const userModel = require("./model/user.model");
const petModel = require("./model/pet.model");

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
  // buscar todos
  //let response = await userModel.find().explain("executionStats");
  // por nome

  //let response = await userModel
  // .find({ first_name: "Mariana" })
  // .explain("executionStats");

  // POPULATE
  // await petModel.create({ name: "Olivia", animal: "Buldog" });

  // await userModel.create({
   //first_name: "Cami",
  // last_name: "Mohr",
  // email: "camimohr@gmail.com",
   //password: "123456",
  // });
  //let user = await userModel.findById("66b55086609b0ec7189eee54");
  //let pet = await petModel.findById("66b55085609b0ec7189eee51");
 // console.log(user, pet);
 //console.log(user);

  //user.pets.push({ pet: "66b55085609b0ec7189eee51" });
  //await userModel.updateOne({ _id: "66b55086609b0ec7189eee54" }, user);
  let user = await userModel.find({ _id: "66b55086609b0ec7189eee54" });
  //.populate('pets.pet');
  console.log(user[0].pets);

};

main();
