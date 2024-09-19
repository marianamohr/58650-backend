const userModel = require("../model/user.model");

const get = async () => {
  const users = await userModel.find({});
  return users;
};

const getByEmail = async (email) => {
  const user = await userModel.find({ email: email });
  return user;
};

module.exports = { get, getByEmail };
