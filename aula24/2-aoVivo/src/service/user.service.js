const { createHash } = require("../utils");
const userModel = require("../model/user.model");

const getUsers = async () => {
  let users = await userModel.find({});
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  return users;
};

const createUser = async ({ first_name, last_name, email, password, role }) => {
  const newPasswd = await createHash(password);
  const userCreated = await userModel.create({
    first_name,
    last_name,
    email,
    password: newPasswd,
    role,
  });
  return userCreated;
};

const updateUser = async (
  { first_name, last_name, email, role },
  uid
) => {
  const userUpdated = await userModel.updateOne(
    { _id: uid },
    { first_name, last_name, email, role }
  );
  return userUpdated;
};

const getUsersById = async (uid) => {
  let user = await userModel.findById(uid);
  //delete user._id
  user = user.toJSON()
  return user;
};

const getUsersByEmail = async (user) => {
  const userFound = await userModel.findOne({ email: user.username });
  console.log(userFound);
  return userFound;
};

const deleteUser = async (email) => {
  const user = await userModel.deleteOne({ email: email });
  return user;
};

module.exports = {
  getUsers,
  createUser,
  getUsersById,
  deleteUser,
  updateUser,
  getUsersByEmail,
};
