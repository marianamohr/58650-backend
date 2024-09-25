const userDao = require("../DAO/user.dao");

const getUsers = async (req, res) => {
  const users = await userDao.getUsers()
  console.log(users)
  res.send({ status: "success", result: users });
};

const getUserById = async (req, res) => {
  const { id } = req.params
  const user = await userDao.getUserById(id)

  res.send({ status: "success", result: user });
};

const saveUser = async (req, res) => {
  const user = req.body;
  console.log("xablau", user);
  const userCreated = await userDao.createUser(user);
  res.send({ status: "success", result: userCreated });
};

module.exports = {
  getUsers,
  getUserById,
  saveUser,
};
